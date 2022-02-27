import React, { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemButton,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Contact } from "store/contact/type";

interface IContactList {
  contacts: Contact[];
}

const ContactList: FC<IContactList> = (props) => {
  const { contacts } = props;
  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {contacts.map((contact) => {
          const labelId = `checkbox-list-label-${contact.id}`;
          return (
            <ListItem
              key={contact.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <ChevronRightIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemAvatar>
                  <Avatar
                    alt={contact.name}
                    src={contact.url}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={contact.name}
                  secondary={contact.username}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ContactList;
