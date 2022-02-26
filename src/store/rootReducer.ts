import { combineReducers } from "redux";
import uiReducer, { initialState as uiState } from "./ui/reducer";
import accountReducer, {
  initialState as accountState,
} from "./account/reducer";
import contactReducer, {
  initialState as contactState,
} from "./contact/reducer";

export const initialState = {
  ui: uiState,
  account: accountState,
  contact: contactState,
};

export default combineReducers({
  ui: uiReducer,
  account: accountReducer,
  contact: contactReducer,
});
