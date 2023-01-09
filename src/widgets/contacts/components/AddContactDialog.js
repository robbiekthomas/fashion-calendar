import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

export default function AddContactDialog({ open, onSave, onCancel }) {
  const [contactName, setContactName] = useState("");
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(false);

  const handleContactNameChange = (contact) => {
    setContactName(contact.target.value);
  };

  const handleSave = () => {
    onSave({
      contactName,
      contactImageData: imageData,
    });

    setContactName("");
    setImageData("");
  };

  const handleImageChange = async (contact) => {
    const file = contact.target.files[0];
    const reader = new FileReader();
    reader.onload = (contact) => {
      console.log("result", contact.target.result);
      setImageData(contact.target.result);
      setLoading(false);
    };
    setLoading(true);
    reader.readAsDataURL(file);
  };

  return (
    <Dialog onClose={onCancel} open={open}>
      <DialogTitle>Add Contact</DialogTitle>
      <TextField
        label="Contact Name"
        value={contactName}
        onChange={handleContactNameChange}
        required
      />
      <br />

      <InputLabel>Contact Photo</InputLabel>
      <Input type="file" onChange={handleImageChange} />
      {imageData && <img src={imageData} alt="Contact" />}
      <Button disabled={loading || !contactName} onClick={handleSave}>
        Save
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Dialog>
  );
}
