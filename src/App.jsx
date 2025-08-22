import { Routes, Route} from 'react-router-dom';
import SideBar from "./pages/global/SideBar";
import TopBar from "./pages/global/TopBar";
import Dashboard from '.';

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          // Main App container
          <div className="relative h-screen box-border flex bg-gray-800">
            {/* Dashboard Left Nav-Sidebar */}
            <SideBar />

            {/* Main Dashboard Content */}
            <main className="main-content">
              {/* Dashboard Top-bar*/}
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
              </Routes>
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
