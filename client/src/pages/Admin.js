import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  approveBooking,
  getBooking,
  rejectBooking,
} from "../services/bookings";

export const Admin = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getBooking().then((res) => {
      if (res.status === 200) {
        setEvents(res.bookings);
      }
    });
  };

  const handleStatus = (_id, value) => {
    if (value === "approved") {
      approveBooking(_id, value).then((res) => {
        if (res.status) {
          getData();
        }
      });
    } else if (value === "pending") {
      approveBooking(_id, value).then((res) => {
        if (res.status) {
          getData();
        }
      });
    } else if (value === "reject") {
      rejectBooking(_id).then((res) => {
        if (res.data.acknowledged) {
          getData();
        }
      });
    }
  };

  return (
    <Container className="my-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Event Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
              <td>
                <Form.Select
                  value={event.bookingStatus}
                  className="w-25"
                  onChange={(e) => handleStatus(event._id, e.target.value)}
                >
                  <option value={"pending"}>Pending</option>
                  <option value={"approved"}>Approve</option>
                  <option value={"reject"}>Reject</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
