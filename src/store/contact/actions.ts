import { Contact, ADD_NEW_CONTACT } from "./type";

const addNewContact = (contact: Contact) => ({
  type: ADD_NEW_CONTACT,
  contact,
});

export { addNewContact };
