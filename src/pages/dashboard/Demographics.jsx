import BarChartComponent from "../../components/BarChart";
function Demographics() {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-5rem)] ml-64">
      <h1 className="my-5 text-2xl text-gray-200 font-lupio">Demographic Analytics</h1>
			<BarChartComponent />
    </div>
  );
}
export default Demographics;
