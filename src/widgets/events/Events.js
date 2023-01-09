import { useState } from "react";
import { Typography, Button, Box } from "@mui/material";

import EventList from "./components/EventList";
import EventListItem from "./components/EventListItem";
import AddEventDialog from "./components/AddEventDialog";

export default function Events() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [eventList, setEventList] = useState([]);

  const handleClickAddEvent = () => {
    setIsDialogOpen(true);
  };

  const handleClickCancelDialog = () => {
    setIsDialogOpen(false);
  };

  const handleClickSaveDialog = (event) => {
    setEventList((eventList) => [...eventList, event]);

    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h2">Events</Typography>
      <Button onClick={handleClickAddEvent}>Add Event</Button>
      <AddEventDialog
        open={isDialogOpen}
        onSave={handleClickSaveDialog}
        onCancel={handleClickCancelDialog}
      />
      <EventList>
        {eventList.map((event) => (
          <EventListItem
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventImageData={event.eventImageData}
            eventAttendees={event.attendees}
          />
        ))}
      </EventList>
    </Box>
  );
}
