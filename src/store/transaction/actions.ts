import { Transaction, LOAD_TRANSACTIONS_SUCCESS } from "./type";

const loadTransactionsSuccess = (transactions: Transaction[]) => ({
  type: LOAD_TRANSACTIONS_SUCCESS,
  transactions,
});

export { loadTransactionsSuccess };
