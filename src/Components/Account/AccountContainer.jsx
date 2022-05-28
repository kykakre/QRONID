import { connect } from "react-redux";
import Account from "./Account";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
  };
};

const AccountContainer = connect(mapStateToProps)(Account);
export default AccountContainer;
