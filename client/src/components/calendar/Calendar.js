import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Modal, Form, InputGroup, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

import "./Calendar.css";

const events = [
  {
    title: "Test Event 1",
    startDate: "2024-10-04T20:24:30+00:00",
    endDate: "2024-10-04T21:24:30+00:00",
  },
  {
    title: "Test Event 2",
    startDate: "2024-10-04T17:24:30+00:00",
    endDate: "2024-10-04T18:24:30+00:00",
  },
  {
    title: "Test Event 3",
    startDate: "2024-11-04T20:24:30+00:00",
    endDate: "2024-11-04T21:24:30+00:00",
  },
  {
    title: "Test Event 4",
    startDate: "2024-12-04T20:24:30+00:00",
    endDate: "2024-12-04T21:24:30+00:00",
  },
];

export const MyCalendar = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showTimeTable, setShowTimeTable] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRangeClick = (arg) => {
    setDate(moment(arg.startStr).format("DD-MM-YYYY"));
    setStartTime(moment(arg.startStr).format("HH:mm"));
    setEndTime(moment(arg.endStr).format("HH:mm"));
    handleShow();
  };

  const groups = events.reduce((groups, game) => {
    const date = game.startDate.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      events: groups[date],
    };
  });

  return (
    <div className="calendar-container">
      <FullCalendar
        customButtons={{
          myCustomButton: {
            text: "Booking",
            click: function () {
              setShowTimeTable(false);
            },
          },
          myCustomButton1: {
            text: "Timetable",
            click: function () {
              setShowTimeTable(true);
            },
          },
        }}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "today prev,next",
          center: "title",
          right: "myCustomButton myCustomButton1",
        }}
        dayHeaderClassNames={"back-white"}
        viewClassNames={showTimeTable ? "display-none" : "back-white"}
        weekNumberClassNames={"day-number"}
        dayCellClassNames={"day-number"}
        eventClassNames={"event-cell"}
        allDaySlot={false}
        selectable={true}
        select={handleRangeClick}
        slotLabelFormat={{ hour: "numeric", minute: "2-digit", hour12: false }}
        nowIndicator={true}
        validRange={{ start: new Date().toISOString() }}
        contentHeight={showTimeTable ? 0 : "auto"}
      />
      {showTimeTable && (
        <div className="back-white p-4 rounded">
          {groupArrays.map((group, index) => (
            <ListGroup key={index}>
              <ListGroup.Item className="bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{moment(group.date).format("dddd")}</strong>
                  <strong>{moment(group.date).format("D MMM YYYY")}</strong>
                </div>
              </ListGroup.Item>
              {group.events.map((event, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex gap-5 text-secondary align-items-center my-3 cursor-pointer">
                    {moment(event.startDate).format("HH:mm")} -{" "}
                    {moment(event.endDate).format("HH:mm")}
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-circle"
                        style={{ color: "#2c38dd" }}
                      ></i>
                      <span className="text-black">{event.title}</span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ))}
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Field Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row-justify">
            <div className="width-45">
              <h5>Booking Time</h5>
              <Form.Label htmlFor="basic-url">Select Booking Date</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  value={date}
                />
                <InputGroup.Text id="basic-addon3">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup>
              <Form.Label htmlFor="basic-url">Select Booking Time</Form.Label>
              <div className="row-justify">
                <InputGroup className="mb-3 w-75">
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={startTime}
                  />
                  <InputGroup.Text id="basic-addon3">
                    <i class="fa-regular fa-clock"></i>
                  </InputGroup.Text>
                </InputGroup>
                <p className="w-25 text-center">-</p>
                <InputGroup className="mb-3 w-75">
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={endTime}
                  />
                  <InputGroup.Text id="basic-addon3">
                    <i class="fa-regular fa-clock"></i>
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
            <div className="width-45">
              <h5>Information</h5>
              <Form.Label htmlFor="basic-url">Field</Form.Label>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter field"
              />
              <Form.Label htmlFor="basic-url" className="mt-4">
                Team Name
              </Form.Label>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter a team name"
              />
              <Form.Label htmlFor="basic-url" className="mt-4">
                Optional
              </Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Form.Check // prettier-ignore
                  className="font-small"
                  type={"checkbox"}
                  label={"Photographer"}
                />
                <Form.Check // prettier-ignore
                  className="font-small"
                  type={"checkbox"}
                  label={"Referee"}
                />
              </div>
            </div>
          </div>
          <div className="w-50">
            <h5>Cost</h5>
            <div className="d-flex justify-content-between align-items-center w-100 mt-3">
              <p className="text-secondary">Field Price per hour</p>
              <p>
                <strong>$0</strong>
              </p>
            </div>
            <Form.Check // prettier-ignore
              className="font-small text-secondary mt-5"
              type={"checkbox"}
              label={
                "I approve orders according to the selected schedule. Field availability is subject to change at any time and can be discussed again with the ProHouse admin."
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 d-flex justify-content-start">
          <Button variant="primary" onClick={handleClose} disabled>
            <i class="fa-brands fa-whatsapp"></i>&nbsp; Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
