import Sidebar from "./Components/Sidebar/Sidebar";
import { useWindowSize } from "react-use";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPageContainer from "./Views/PayPageContainer";
import SupportPageContainer from "./Views/SupportPageContainer";
import LoginAccept from "./Components/Login/LoginAccept";
import "./Style/Style.scss";
import Login from "./Components/Login/Login";
import { useState } from "react";
import AccountContainer from "./Components/Account/AccountContainer";
function App(props) {
  const [login, setLogin] = useState(true);
  const { width } = useWindowSize();
  if (width <= 992) {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sidebar">
            <Sidebar />
          </div>
          <Routes>
            <Route path="login/*" element={<Login />} />
            <Route path="/number" element={<LoginAccept />} />
            <Route
              path=""
              element={
                login === false ? (
                  <Navigate to="login" />
                ) : (
                  <AccountPageContainer />
                )
              }
            />
            <Route
              path="pay"
              element={
                login === false ? (
                  <Navigate to="/login" />
                ) : (
                  <PayPageContainer />
                )
              }
            />
            <Route
              path="support"
              element={
                login === false ? (
                  <Navigate to="/login" />
                ) : (
                  <SupportPageContainer />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App">
            {login?<div className="sidebar">
                <Sidebar />
            </div>:<></>}


          <Routes>
            <Route path="login/*" element={<Login />} />
            <Route path="/number" element={<LoginAccept />} />
            <Route
              path=""
              element={
                login === false ? (
                  <Navigate to="login" />
                ) : (
                  <AccountPageContainer />
                )
              }
            />
            <Route
              path="pay"
              element={
                login === false ? (
                  <Navigate to="/login" />
                ) : (
                  <PayPageContainer />
                )
              }
            />
            <Route
              path="support"
              element={
                login === false ? (
                  <Navigate to="/login" />
                ) : (
                  <SupportPageContainer />
                )
              }
            />
          </Routes>
            {login?<div className="account">
                <AccountContainer />
            </div>:<></> }

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
