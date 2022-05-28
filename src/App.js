import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPage from "./Views/PayPage";
import SupportPage from "./Views/SupportPage";
import "./Style/Style.scss";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="" element={<AccountPageContainer />} />
            <Route path="pay" element={<PayPage />} />
            <Route path="support" element={<SupportPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
