import { Button, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";

export function CustomDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        variant="permanent"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem>Basic</ListItem>
          <ListItem>Setting</ListItem>
        </List>
      </Drawer>
    </>
  );
}
