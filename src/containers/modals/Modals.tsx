import React, { FC } from "react";
import { ModalType } from "utils";
import AccountModal from "./AccountModal";

interface IModals {
  modal: { [modalName: string]: boolean };
}
const Modals: FC<IModals> = (props) => {
  const { modal } = props;
  return <>{modal[ModalType.AccountModal] && <AccountModal />}</>;
};

export default Modals;
