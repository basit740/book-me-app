import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Modal, Form, InputGroup, ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { isMobile, isTablet } from "react-device-detect";

import "./Calendar.css";
import { addBooking, getBooking } from "../../services/bookings";

export const MyCalendar = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showTimeTable, setShowTimeTable] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [name, setName] = useState(null);
  const [approve, setApprove] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getBooking().then((res) => {
      if (res.status === 200) {
        const newBookings = res.bookings.map((data) => {
          let newData = { ...data };
          if (data.bookingStatus === "pending") {
            newData.color = "yellow";
            newData.textColor = "black";
          } else if (data.bookingStatus === "approved") {
            newData.color = "green";
            newData.textColor = "white";
          }
          return newData;
        });
        setEvents(newBookings);
      }
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRangeClick = (arg) => {
    setDate(moment(arg.startStr).format("DD-MM-YYYY"));
    setStartTime(moment(arg.startStr).format("HH:mm"));
    setEndTime(moment(arg.endStr).format("HH:mm"));
    setEventData(arg);
    handleShow();
  };

  const groups = events.reduce((groups, game) => {
    const date = game.start.split("T")[0];
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

  const onSubmit = () => {
    addBooking(name, eventData.startStr, eventData.endStr).then((res) => {
      if (res.status === 201) {
        const message = `"BookMe Alert"
      BookingDate: ${date}
      BookingTime: ${startTime} - ${endTime}
      Name: ${name}
        `;

        getData();
        handleClose();
        let number = process.env.REACT_APP_TEST_PHONE_NUMBER.replace(
          /[^\w\s]/gi,
          ""
        ).replace(/ /g, "");
        let url = `${process.env.REACT_APP_WHATSAPP_URL}/${number}`;
        url += `/?text=${encodeURI(message)}`;
        window.open(url);
      }
    });
  };

  return (
    <div className="calendar-container py-3">
      <Container className={(isMobile || isTablet) && "w-100 p-0"}>
        <h5 className="text-white mb-5 text-center">
          Click the available time to quick booking
        </h5>
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
          views={{
            timeGridThreeDay: {
              type: "timeGrid",
              duration: { days: 3 },
            },
          }}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView={
            isMobile || isTablet ? "timeGridThreeDay" : "timeGridWeek"
          }
          headerToolbar={{
            left: "today prev,next",
            center: "title",
            right: "myCustomButton myCustomButton1",
          }}
          dayHeaderClassNames={"back-white"}
          viewClassNames={showTimeTable ? "display-none" : "back-white"}
          allDaySlot={false}
          selectable={true}
          select={handleRangeClick}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            hour12: false,
          }}
          nowIndicator={true}
          contentHeight={showTimeTable ? 0 : "auto"}
          slotDuration={"01:00:00"}
          events={events}
          selectAllow={function (selectInfo) {
            return moment().diff(selectInfo.start) <= 0;
          }}
          eventClick={(arg) => {
            setOpenEvent(true);
            setSelectedEvent(arg.event);
          }}
          selectLongPressDelay={500}
        />
        {showTimeTable && (
          <div className="back-white p-4 rounded">
            {groupArrays.length ? (
              groupArrays.map((group, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item className="bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                      <strong>{moment(group.date).format("dddd")}</strong>
                      <strong>{moment(group.date).format("D MMM YYYY")}</strong>
                    </div>
                  </ListGroup.Item>
                  {group.events.map((event, index) => (
                    <ListGroup.Item
                      key={index}
                      onClick={() => {
                        setOpenEvent(true);
                        setSelectedEvent(event);
                      }}
                      className="list-item"
                    >
                      <div className="d-flex gap-5 text-secondary align-items-center my-3">
                        {moment(event.start).format("HH:mm")} -{" "}
                        {moment(event.end).format("HH:mm")}
                        <div className="d-flex gap-2 align-items-center">
                          <i
                            class="fa-solid fa-circle"
                            style={{
                              color:
                                event.bookingStatus === "pending"
                                  ? "yellow"
                                  : event.bookingStatus === "approved"
                                  ? "green"
                                  : "#2c38dd",
                            }}
                          ></i>
                          <span className="text-black">{event.title}</span>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ))
            ) : (
              <h6 className="text-center">No data found</h6>
            )}
          </div>
        )}
        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName={`${isMobile || isTablet ? "mw-100" : "mw-75"}`}
          fullscreen={isMobile || isTablet}
        >
          <Modal.Header closeButton>
            <Modal.Title>Field Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={isMobile || isTablet ? "row-col" : "row-justify"}>
              <div className={isMobile || isTablet ? "width-100" : "width-45"}>
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
              <div className={isMobile || isTablet ? "width-100" : "width-45"}>
                <h5>Information</h5>
                <Form.Label htmlFor="basic-url" className="mt-4">
                  Name
                </Form.Label>
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Enter a name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={isMobile || isTablet ? "width-100" : "w-50"}>
              <Form.Check // prettier-ignore
                className="font-small text-secondary mt-5"
                type={"checkbox"}
                label={
                  "I approve orders according to the selected schedule. Field availability is subject to change at any time and can be discussed again with the ProHouse admin."
                }
                onChange={(e) => setApprove(e.target.checked)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="w-100 d-flex justify-content-start">
            <Button
              variant="success"
              disabled={!approve}
              onClick={() => onSubmit()}
            >
              <i class="fa-brands fa-whatsapp"></i>&nbsp; Message
            </Button>
          </Modal.Footer>
        </Modal>
        {selectedEvent && (
          <Modal
            show={openEvent}
            onHide={() => setOpenEvent(false)}
            dialogClassName={`h-75 ${isMobile || isTablet ? "w-100" : "w-50"}`}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Detail Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                className={
                  isMobile || isTablet
                    ? "d-flex flex-column"
                    : "d-flex align-items-center gap-5"
                }
              >
                <div>
                  <strong>Booking Date</strong>
                  <p className="text-secondary">
                    {moment(selectedEvent.start).format("dddd, MMMM D, YYYY")}
                  </p>
                </div>
                <div>
                  <strong>Time Period</strong>
                  <p className="text-secondary">
                    {moment(selectedEvent.start).format("HH:mm")} -{" "}
                    {moment(selectedEvent.end).format("HH:mm")}
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <strong>Name</strong>
                <p className="text-secondary">{selectedEvent.title}</p>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </div>
  );
};
