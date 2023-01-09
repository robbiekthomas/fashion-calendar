import { Component, createRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class FashionCalendar extends Component {
  calendarRef = createRef();

  render = () => {
    const calendar = this?.calendarRef?.current?.getApi();

    const events = calendar?.getEvents();

    console.log("events", events);

    return (
      <>
        <button onClick={this.handleClick}>Add Event</button>
        <FullCalendar
          ref={this.calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          aspectRatio={5}
        />
      </>
    );
  };

  handleClick = () => {
    const calendar = this.calendarRef.current.getApi();

    var dateStr = prompt("Enter a date in YYYY-MM-DD format");
    var date = new Date(dateStr + "T00:00:00"); // will be in local time

    if (!isNaN(date.valueOf())) {
      // valid?
      calendar.addEvent({
        title: "dynamic event",
        start: date,
        allDay: true,
      });
      alert("Great. Now, update your database...");
      console.log("calendar.getEvents()", calendar.getEvents());
    } else {
      alert("Invalid date.");
    }
  };
}
