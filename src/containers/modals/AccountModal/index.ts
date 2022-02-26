import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { closeModal, setActiveAccount, RootState } from "store";
import { ModalType } from "utils";
import AccountModal from "./AccountModal";

const mapStateToProps = (state: RootState) => ({
  open: state.ui.modal[ModalType.AccountModal],
  accounts: state.account.data,
  activeAccount: state.account.activeAccount,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeModal,
      setActiveAccount,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
