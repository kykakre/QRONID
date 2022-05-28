import { connect } from "react-redux";
import AccountPage from "./AccountPage";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
    card: state.accountPage.cardItems,
  };
};

const AccountPageContainer = connect(mapStateToProps)(AccountPage);
export default AccountPageContainer;