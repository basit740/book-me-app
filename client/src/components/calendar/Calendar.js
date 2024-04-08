import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Modal, Form, InputGroup, ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

import "./Calendar.css";

const eventsData = [
  {
    title: "Test Event 1",
    start: "2024-10-04T20:24:30+00:00",
    end: "2024-10-04T21:24:30+00:00",
  },
  {
    title: "Test Event 2",
    start: "2024-10-04T17:24:30+00:00",
    end: "2024-10-04T18:24:30+00:00",
  },
  {
    title: "Test Event 3",
    start: "2024-11-04T20:24:30+00:00",
    end: "2024-11-04T21:24:30+00:00",
  },
  {
    title: "Test Event 4",
    start: "2024-12-04T20:24:30+00:00",
    end: "2024-12-04T21:24:30+00:00",
  },
];

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
  const [events, setEvents] = useState(eventsData);

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
    const message = `"BookMe Alert"
  BookingDate: ${date}
  BookingTime: ${startTime} - ${endTime}
  Name: ${name}
    `;
    const newEvent = [...events];
    newEvent.push({
      title: name,
      start: eventData.startStr,
      end: eventData.endStr,
    });
    setEvents(newEvent);
    handleClose();
    let number = process.env.REACT_APP_TEST_PHONE_NUMBER.replace(
      /[^\w\s]/gi,
      ""
    ).replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `${process.env.REACT_APP_WHATSAPP_URL}/send?phone=${number}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
  };

  return (
    <div className="calendar-container py-3">
      <Container>
        <h5 className="text-white my-5 text-center">
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
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "today prev,next",
            center: "title",
            right: "myCustomButton myCustomButton1",
          }}
          dayHeaderClassNames={"back-white"}
          viewClassNames={showTimeTable ? "display-none" : "back-white"}
          eventClassNames={"event-cell"}
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
            <div className="w-50">
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
            dialogClassName="h-75"
          >
            <Modal.Header closeButton>
              <Modal.Title>Detail Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center gap-5">
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
