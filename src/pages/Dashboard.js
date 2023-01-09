import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import Contacts from "../widgets/contacts/Contacts";
import Events from "../widgets/events/Events";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h1">Fashion Calendar</Typography>
      <Box sx={{ display: "flex" }}>
        <Events />
        <Contacts />
      </Box>
    </Box>
  );
}
