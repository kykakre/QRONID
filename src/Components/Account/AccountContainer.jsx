import { connect } from "react-redux";
import AccountAccordeon from "./AccountAccordeon";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
  };
};

const AccountContainer = connect(mapStateToProps)(AccountAccordeon);
export default AccountContainer;
