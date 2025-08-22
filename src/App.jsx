import SideBar from "./pages/global/SideBar";
import TopBar from "./pages/global/TopBar";

function App() {
  return (
    <div className="h-screen box-border flex bg-gray-800">
      {/*Main app container*/}
      <SideBar />
      {/* Dashboard Left Nav-Sidebar */}

      {/* Main Dashboard Content */}

      <main className="main-content">
        <TopBar />
        {/* Dashboard Top-bar*/}
      </main>
    </div>
  );
}

export default App;
