import { UIState, UIActionTypes, OPEN_MODAL, CLOSE_MODAL } from "./type";

export const initialState: UIState = {
  modal: {},
  message: "",
};

const uiReducer = (state = initialState, action: UIActionTypes) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: { ...state.modal, [action.modalName]: true },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, [action.modalName]: false },
      };
    default:
      return state;
  }
};

export default uiReducer;
