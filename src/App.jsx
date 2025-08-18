import SideBar from "./pages/global/SideBar";
import TopBar from "./pages/global/TopBar";

function App() {
  return <>
  <div className="app">
    {/* Left Sidebar */}
    <SideBar />
    
    {/* Main Dashboard Content */}
    <main className="main-content">
      
      {/* Top bar*/}
      <TopBar />

    </main>
  </div>
  </>;
}

export default App;
