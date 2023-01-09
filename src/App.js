import { useState } from "react";
import "./App.css";
import EventCalendar from "./EventCalendar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Events from "./widgets/events/Events";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;

/* <ul>
    {events.map(({ date, name, contacts }) => (
      <li>
        {date} - {name}
        <br />
        <ul>
          {contacts.map(({ name, events }) => (
            <li>
              {name}
              <br />
              <ul>
                {events.map(({ photo: { id, url } }) => (
                  <li>
                    <img alt={id} src={url} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul> */
