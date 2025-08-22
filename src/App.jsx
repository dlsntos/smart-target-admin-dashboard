import { Routes, Route} from 'react-router-dom';
import SideBar from "./pages/global/SideBar";
import TopBar from "./pages/global/TopBar";

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="relative h-screen box-border flex bg-gray-800">
            {/*Main app container*/}
            <SideBar />
            {/* Dashboard Left Nav-Sidebar */}

            {/* Main Dashboard Content */}

            <main className="main-content">
              <TopBar />
              {/* Dashboard Top-bar*/}
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
