import React, { FC } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { Contact } from "store/contact/type";
import { useRouter } from "next/router";

interface IContactsCard {
  contacts: Contact[];
}

const ContactsCard: FC<IContactsCard> = (props) => {
  const { contacts } = props;
  const router = useRouter();
  const handleCardClick = () => {
    router.push("/contacts");
  };

  return (
    <Card sx={{ minHeight: "99px", background: "#F5F5F5" }}>
      <CardContent onClick={handleCardClick}>
        <Box>
          <Typography>Contacts</Typography>
        </Box>
        <Box sx={{ display: "flex", overflowX: "auto" }}>
          {contacts.map((contact) => (
            <Avatar
              key={contact.id}
              alt={contact.name}
              src={contact.url}
              sx={{ background: "#BB85FF" }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactsCard;
