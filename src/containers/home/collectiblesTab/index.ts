import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "store";
import CollectiblesTab from "./CollectiblesTab";

const mapStateToProps = (state: RootState) => ({
  collectibles: state.collectible.data,
});

const mapDispatchToProps = (_dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CollectiblesTab);
