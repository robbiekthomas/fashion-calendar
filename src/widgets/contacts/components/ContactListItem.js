import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

export default function ContactListItem({
  contactName,
  contactDate,
  contactImageData,
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={contactName} secondary={contactDate} />
        {contactImageData && (
          <img width={"200px"} src={contactImageData} alt="outfit" />
        )}
      </ListItemButton>
    </ListItem>
  );
}
