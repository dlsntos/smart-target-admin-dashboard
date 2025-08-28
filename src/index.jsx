import BarChartComponent from "./components/BarChart";
import ConsentTrendChart from "./components/ConsentTrendOverTime";

function Dashboard() {
  return (
    <div className="h-full sm:ml-0 md:ml-64 bg-gray-800 p-8">
      <h1 className="text-3xl font-lupio text-gray-100 mb-8">Dashboard</h1>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-64 bg-gray-700 rounded-lg p-6 shadow">
          <h2 className="text-xl text-gray-200 mb-2">Demographic Analytics</h2>
          <p className="text-gray-400">View age, gender, and other demographic stats.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 shadow">
          <h2 className="text-xl text-gray-200 mb-2">Consent Analytics</h2>
          <p className="text-gray-400">Track user consent and privacy metrics.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 shadow">
          <h2 className="text-xl text-gray-200 mb-2">Sales</h2>
          <p className="text-gray-400">Review sales data and revenue trends.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 shadow">
          <h2 className="text-xl text-gray-200 mb-2">Feedback</h2>
          <p className="text-gray-400">Read user feedback and survey results.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
