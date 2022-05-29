import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPageContainer from "./Views/PayPageContainer";
import SupportPage from "./Views/SupportPage";
import "./Style/Style.scss";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Routes>
          <Route path="" element={<AccountPageContainer />} />
          <Route path="pay" element={<PayPageContainer />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
