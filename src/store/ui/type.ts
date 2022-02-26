export const OPEN_MODAL = "UI:OPEN_MODAL";
export const CLOSE_MODAL = "UI:CLOSE_MODAL";

export interface UIState {
  modal: { [name: string]: boolean };
  message: string;
}

interface OpenModalAction {
  type: typeof OPEN_MODAL;
  modalName: string;
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
  modalName: string;
}

export type UIActionTypes = OpenModalAction | CloseModalAction;
