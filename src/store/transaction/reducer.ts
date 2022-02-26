import {
  TransactionState,
  TransactionActionTypes,
  LOAD_TRANSACTIONS_SUCCESS,
} from "./type";

export const initialState: TransactionState = {
  data: [
    {
      id: 1,
      amount: 0.526,
      transactionType: "credit",
      recievedFrom: "devon.near",
      sendTo: "",
    },
    {
      id: 2,
      amount: 0.224,
      transactionType: "debit",
      recievedFrom: "",
      sendTo: "devon.near",
    },
    {
      id: 3,
      amount: 0.9,
      transactionType: "credit",
      recievedFrom: "devon.near",
      sendTo: "",
    },
  ],
};

const transactionReducer = (
  state = initialState,
  action: TransactionActionTypes
) => {
  switch (action.type) {
    case LOAD_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.transactions],
      };
    default:
      return state;
  }
};

export default transactionReducer;
