import { AccountState, SET_SELECTED_ACCOUNT, AccountActionTypes } from "./type";

export const initialState: AccountState = {
  data: [
    {
      id: 1,
      accountUrl: "",
      accountName: "johndoe.near",
      info: "0.34 NEAR",
    },
    {
      id: 2,
      accountUrl: "",
      accountName: "mike.near",
      info: "0.34 NEAR",
    },
    {
      id: 3,
      accountUrl: "",
      accountName: "jhon.near",
      info: "0.34 NEAR",
    },
  ],
  activeAccount: {
    id: 1,
    accountUrl: "",
    accountName: "johndoe.near",
    info: "0.34 NEAR",
  },
};

const accountReducer = (state = initialState, action: AccountActionTypes) => {
  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      return {
        ...state,
        activeAccount: { ...action.account },
      };
    default:
      return state;
  }
};

export default accountReducer;
