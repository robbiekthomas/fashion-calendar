import { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../app/contactSlice";

import ContactList from "./components/ContactList";
import ContactListItem from "./components/ContactListItem";
import AddContactDialog from "./components/AddContactDialog";

export default function Contacts() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const [contactList, setContactList] = useState([]);
  const contactList = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();

  const handleClickAddContact = () => {
    setIsDialogOpen(true);
  };

  const handleClickCancelDialog = () => {
    setIsDialogOpen(false);
  };

  const handleClickSaveDialog = (contact) => {
    // setContactList((contactList) => [...contactList, contact]);
    dispatch(addContact(contact));

    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h2">Contacts</Typography>
      <Button onClick={handleClickAddContact}>Add Contact</Button>
      <AddContactDialog
        open={isDialogOpen}
        onSave={handleClickSaveDialog}
        onCancel={handleClickCancelDialog}
      />
      <ContactList>
        {contactList.map((contact) => (
          <ContactListItem
            contactName={contact.contactName}
            contactDate={contact.contactDate}
            contactImageData={contact.contactImageData}
          />
        ))}
      </ContactList>
    </Box>
  );
}
