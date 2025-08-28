import { Routes, Route } from "react-router-dom";
import SideBar from "./pages/global/SideBar";
import Login from "./pages/Login";
import Dashboard from ".";
import Demographics from "./pages/dashboard/Demographics";
import ConsentAnalytics from "./pages/dashboard/ConsentAnalytics";
import Feedback from "./pages/dashboard/Feedback";
import Sales from "./pages/dashboard/Sales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={
          // Main App container
          <div className="relative h-screen w-screen box-border flex bg-gray-800 overflow-hidden">
            {/* Dashboard Left Nav-Sidebar */}
            <SideBar />
            {/* Main Dashboard Content */}
            <main className="flex flex-col h-full w-full">
              <div className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="consent-analytics" element={<ConsentAnalytics />} />
                  <Route path="feedback" element={<Feedback />} />
                  <Route path="sales" element={<Sales />} />
                  <Route path="demographic" element={<Demographics />} />
                </Routes>
              </div>
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
