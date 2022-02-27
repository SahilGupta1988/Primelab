import {
  ContactState,
  ContactActionTypes,
  ADD_NEW_CONTACT,
  LOAD_CONTACTS_SUCCESS,
} from "./type";

export const initialState: ContactState = {
  data: [
    {
      id: 1,
      url: "",
      username: "johndoe.near",
      name : "John Doe",
      info: "0.34 NEAR",
    },
    {
      id: 2,
      url: "",
      username: "mike.near",
      name : "Mike McKinney",
      info: "0.34 NEAR",
    },
    {
      id: 3,
      url: "",
      username: "jhon.near",
      name : "John McKinney",
      info: "0.34 NEAR",
    },
  ],
};

const contactReducer = (state = initialState, action: ContactActionTypes) => {
  switch (action.type) {
    case LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.contacts],
      };
    case ADD_NEW_CONTACT:
      return {
        ...state,
        data: [...state.data, action.contact],
      };
    default:
      return state;
  }
};

export default contactReducer;
