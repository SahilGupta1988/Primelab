import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "store";
import TransactionsTab from "./TransactionsTab";

const mapStateToProps = (state: RootState) => ({
  transactions: state.transaction.data,
});

const mapDispatchToProps = (_dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTab);
