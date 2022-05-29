import { connect } from "react-redux";
import PayPage from "./PayPage";

let mapStateToProps = (state) => {
  return {
    person: state.accountPage.personInfo,
    pay: state.payPage.historyInfo,
    check: state.payPage.checkInfo,
    faq: state.payPage.faqInfo,
  };
};

const PayPageContainer = connect(mapStateToProps)(PayPage);
export default PayPageContainer;
