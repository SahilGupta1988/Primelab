import { CLOSE_MODAL, OPEN_MODAL } from "./type";

const openModal = (modalName: string) => ({
  type: OPEN_MODAL,
  modalName,
});

const closeModal = (modalName: string) => ({
  type: CLOSE_MODAL,
  modalName,
});

export { openModal, closeModal };
