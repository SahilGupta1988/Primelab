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
      name: "johndoe.near",
      info: "0.34 NEAR",
    },
    {
      id: 2,
      url: "",
      name: "mike.near",
      info: "0.34 NEAR",
    },
    {
      id: 3,
      url: "",
      name: "jhon.near",
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
