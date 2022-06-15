import { connect } from "react-redux";
import AccountPage from "./AccountPage";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
    card: state.accountPage.cardItems,
    isLogin: state.accountPage,
    cardPay: state.accountPage.CardPayInfo,
  };
};

const AccountPageContainer = connect(mapStateToProps)(AccountPage);
export default AccountPageContainer;
