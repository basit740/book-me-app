import React from "react";
import TimeCalendar from "react-timecalendar";

const openHours = [
  [9.5, 15],
  [9, 23.5],
];
function loggingTime(time) {
  console.log(time);
}
const MyCalendar = () => (
  <TimeCalendar
    disableHistory
    clickable
    timeSlot={30}
    openHours={openHours}
    onTimeClick={loggingTime}
  />
);

export default MyCalendar;