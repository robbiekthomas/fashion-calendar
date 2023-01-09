import EventIcon from "@mui/icons-material/Event";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function EventListItem({
  eventName,
  eventDate,
  eventImageData,
  eventAttendees,
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary={eventName} secondary={eventDate} />
        <Stack direction="row" spacing={1}>
          {eventAttendees.map((attendee) => (
            <Chip
              avatar={
                <Avatar
                  alt={attendee.contactName}
                  src={attendee.contactImageData}
                />
              }
              label={attendee.contactName}
              variant="outlined"
            />
          ))}
        </Stack>
        {eventImageData && (
          <img width={"200px"} src={eventImageData} alt="outfit" />
        )}
      </ListItemButton>
    </ListItem>
  );
}
