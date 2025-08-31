import { useEffect } from "react";
import DemographicsCard from "./components/DemographicCard";
import SalesCard from "./components/SalesCard";
import FeedbackCard from "./components/FeedbackCard";
function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="h-full sm:ml-0 lg:ml-64 bg-gray-800 p-4 md:p-8">
      <h1 className="text-3xl font-lupio text-gray-100 mb-8 text-center lg:text-left">
        Dashboard
      </h1>

      {/** GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/** CARD */}
        <div className="bg-gray-700 rounded-lg p-6 shadow flex flex-col h-full">
          <div className="flex-1 flex flex-col">
            <DemographicsCard />
          </div>
        </div>

        {/** CARD */}
        <div className="bg-gray-700 rounded-lg p-6 shadow flex flex-col h-full">
          <div className="flex-1 flex flex-col">
            <SalesCard />
          </div>
        </div>

        {/** CARD */}
        <div className="bg-gray-700 rounded-lg p-6 shadow flex flex-col h-full">
          <div className="flex-1 flex flex-col">
            <FeedbackCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

