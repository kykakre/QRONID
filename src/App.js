import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccountPageContainer from "./Views/AccountPageContainer";
import PayPageContainer from "./Views/PayPageContainer";
import SupportPageContainer from "./Views/SupportPageContainer";
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
          <Route path="support" element={<SupportPageContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
