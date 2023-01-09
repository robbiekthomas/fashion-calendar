import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  Input,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";
import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";

import ContactListItem from "../../contacts/components/ContactListItem";

export default function AddEventDialog({ open, onSave, onCancel }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(moment());
  const [imageData, setImageData] = useState();
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(false);

  const contactList = useSelector((state) => state.contact.contacts);
  console.log(contactList);

  const handleEventDateChange = (newEventDate) => {
    setEventDate(newEventDate);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleSave = () => {
    onSave({
      eventName,
      eventDate: eventDate.format("LL"),
      eventImageData: imageData,
      attendees,
    });
    setEventDate(moment());
    setEventName("");
    setImageData("");
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log("result", event.target.result);
      setImageData(event.target.result);
      setLoading(false);
    };
    setLoading(true);
    reader.readAsDataURL(file);
  };

  const handleAttendeesChange = (event, selectedOptions) => {
    console.log("selectedOptions", selectedOptions);
    setAttendees(selectedOptions);
  };

  return (
    <Dialog onClose={onCancel} open={open}>
      <DialogTitle>Add Event</DialogTitle>
      <TextField
        label="Event Name"
        value={eventName}
        onChange={handleEventNameChange}
        required
      />
      <br />
      <DatePicker
        label="Event Date"
        value={eventDate}
        onChange={handleEventDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <Autocomplete
        multiple
        options={contactList}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.contactName}
        renderInput={(params) => <TextField {...params} label="Attendees" />}
        onChange={handleAttendeesChange}
        onInput
      />
      <InputLabel>Upload Outfit Photo</InputLabel>
      <Input type="file" onChange={handleImageChange} />
      {imageData && <img src={imageData} alt="Event" />}
      <Button disabled={loading || !eventName} onClick={handleSave}>
        Save
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Dialog>
  );
}
