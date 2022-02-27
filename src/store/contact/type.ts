export const ADD_NEW_CONTACT = "CONTACT:ADD_NEW_CONTACT";
export const LOAD_CONTACTS_SUCCESS = "CONTACT:LOAD_CONTACTS_SUCCESS";

export interface ContactState {
  data: Contact[];
}

export interface Contact {
  id: number;
  url: string;
  username : string
  name: string;
  info: string;
}

interface LoadContactSuccessAction {
  type: typeof LOAD_CONTACTS_SUCCESS;
  contacts: Contact[];
}

interface AddNewContactAction {
  type: typeof ADD_NEW_CONTACT;
  contact: Contact;
}

export type ContactActionTypes = AddNewContactAction | LoadContactSuccessAction;
