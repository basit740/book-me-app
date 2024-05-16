import { BaseUrl } from "../hook/useAuthentication";

export const addBooking = (start, end, userName) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return fetch(`${BaseUrl}bookings/add_booking`, {
    mode: "cors",
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      title: userName,
      start: start,
      end: end,
      bookingStatus: "pending",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

export const getBooking = (title, start, end) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return fetch(`${BaseUrl}bookings/get_bookings`, {
    mode: "cors",
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      const bookings = json.map((booking) => {
        const startDate = new Date(booking.start);
        const endDate = new Date(booking.end);

        const options = {
          weekday: "long", // Display full name of the day
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC", // Assuming dates are in UTC, adjust if needed
          timeZoneName: "short", // Display short name of the timezone
          locale: "id-ID", // Set locale to Indonesian
        };

        booking.start = startDate.toLocaleDateString("id-ID", options);
        booking.end = endDate.toLocaleDateString("id-ID", options);

        return booking;
      });

      return bookings;
    })
    .catch((error) => {
      return error;
    });
};

export const approveBooking = (_id, status) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return fetch(`${BaseUrl}bookings/approve_booking`, {
    mode: "cors",
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ _id: _id, status: status }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

export const rejectBooking = (_id) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return fetch(`${BaseUrl}bookings/reject_booking`, {
    mode: "cors",
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ _id: _id }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};
