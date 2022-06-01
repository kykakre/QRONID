import { connect } from "react-redux";
import SupportPage from "./SupportPage";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
    message: state.message,
  };
};

const SupportPageContainer = connect(mapStateToProps)(SupportPage);
export default SupportPageContainer;
