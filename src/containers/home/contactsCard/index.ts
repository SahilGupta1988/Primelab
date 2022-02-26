import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "store";
import ContactsCard from "./ContactsCard";

const mapStateToProps = (state: RootState) => ({
  contacts: state.contact.data,
});

const mapDispatchToProps = (_dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCard);
