import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPageContainer from "./Views/PayPageContainer";
import SupportPageContainer from "./Views/SupportPageContainer";
import "./Style/Style.scss";
import Login from "./Components/Login/Login";
import { useState } from "react";
function App(props) {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Routes>
          <Route path="login" element={<Login />} />
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
              login === false ? <Navigate to="/login" /> : <PayPageContainer />
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
}

export default App;
