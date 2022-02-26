import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "store";
import Modals from "./Modals";

const mapStateToProps = (state: RootState) => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = (_dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
