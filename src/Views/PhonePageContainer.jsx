import { connect } from "react-redux";
import PhonePage from "./PhonePage";

let mapStateToProps = (state) => {
    return {
        personPhone: state.accountPage.personInfo,
        phoneSetting:state.accountPage.phoneSetting,
    };
};

const PhonePageContainer = connect(mapStateToProps)(PhonePage);
export default PhonePageContainer;
