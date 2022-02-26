export const SET_SELECTED_ACCOUNT = "ACCOUNT:SET_SELECTED_ACCOUNT";

export interface AccountState {
  data: Account[];
  activeAccount: Account;
}

export interface Account {
  id: number;
  accountUrl: string;
  accountName: string;
  info: string;
}

interface SetSelectedAccountAction {
  type: typeof SET_SELECTED_ACCOUNT;
  account: Account;
}

export type AccountActionTypes = SetSelectedAccountAction;
