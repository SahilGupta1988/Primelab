import { combineReducers } from "redux";
import uiReducer, { initialState as uiState } from "./ui/reducer";
import accountReducer, {
  initialState as accountState,
} from "./account/reducer";
import contactReducer, {
  initialState as contactState,
} from "./contact/reducer";
import collectibleReducer, {
  initialState as collectibleState,
} from "./collectible/reducer";
import transactionReducer, {
  initialState as transactionState,
} from "./transaction/reducer";

export const initialState = {
  ui: uiState,
  account: accountState,
  contact: contactState,
  collectible: collectibleState,
  transaction: transactionState,
};

export default combineReducers({
  ui: uiReducer,
  account: accountReducer,
  contact: contactReducer,
  collectible: collectibleReducer,
  transaction: transactionReducer,
});
