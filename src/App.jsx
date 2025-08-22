import { Routes, Route} from 'react-router-dom';
import SideBar from "./pages/global/SideBar";
import TopBar from "./pages/global/TopBar";
import Dashboard from '.';
import AdPerformance from './pages/dashboard/AdPerformance';

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          // Main App container
          <div className="relative h-screen w-screen box-border flex bg-gray-800">
            {/* Dashboard Left Nav-Sidebar */}
            <SideBar />

            {/* Main Dashboard Content */}
            <main className="h-full w-full">
              {/* Dashboard Top-bar*/}
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/ad-performance" element={<AdPerformance />} />
              </Routes>
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
