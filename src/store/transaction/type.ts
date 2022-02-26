export const LOAD_TRANSACTIONS_SUCCESS = "CONTACT:LOAD_CONTACTS_SUCCESS";

export interface TransactionState {
  data: Transaction[];
}

export interface Transaction {
  id: number;
  amount: number;
  transactionType: string;
  sendTo: string;
  recievedFrom: string;
}

interface LoadTransactionSuccessAction {
  type: typeof LOAD_TRANSACTIONS_SUCCESS;
  transactions: Transaction[];
}
export type TransactionActionTypes = LoadTransactionSuccessAction;
