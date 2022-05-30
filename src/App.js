import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPageContainer from "./Views/PayPageContainer";
import SupportPageContainer from "./Views/SupportPageContainer";
import "./Style/Style.scss";
import Login from "./Components/Login/Login";
function App(props) {
  if (props.isLogin === false)
    return <Navigate path="login" element={<Login />} />;
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Routes>
          <Route path="" element={<AccountPageContainer />} />
          <Route path="pay" element={<PayPageContainer />} />
          <Route path="support" element={<SupportPageContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
