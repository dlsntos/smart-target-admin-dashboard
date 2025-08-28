import ConsentTrendChart from "../../components/ConsentTrendOverTime";
import PieChartComponent from "../../components/PieChart";
import BackButton from "../../components/BackButton";
function ConsentAnalytics() {
  return (
    <div className="flex flex-col items-center h-full md:ml-64 p-4 overflow-y-auto">
      <h1 className="my-5 text-2xl text-gray-200 font-lupio">
        Consent Analytics
      </h1>
			<div className="w-full flex justify-start mb-4">
  			<BackButton />
			</div>
      <div className="flex flex-col md:flex-row gap-1 h-full w-full">
        <div className="flex-1 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex items-center justify-center bg-gray-800 p-4 rounded-2xl shadow">
          <PieChartComponent />
        </div>
        <div className="flex-1 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex items-center justify-center bg-gray-800 p-4 rounded-2xl shadow">
          <ConsentTrendChart />
        </div>
      </div>
    </div>
  );
}
export default ConsentAnalytics;
