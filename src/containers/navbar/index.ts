import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { openModal, RootState } from "store";
import { ModalType } from "utils";
import Navbar from "./Navbar";

const mapStateToProps = (state: RootState) => ({
  accountModal: state.ui.modal[ModalType.AccountModal],
  activeAccount: state.account.activeAccount,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
