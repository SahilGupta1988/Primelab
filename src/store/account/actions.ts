import { Account, SET_SELECTED_ACCOUNT } from "./type";

const setActiveAccount = (account: Account) => ({
  type: SET_SELECTED_ACCOUNT,
  account,
});

export { setActiveAccount };
