import BarChartComponent from "../../components/BarChart";
import BackButton from "../../components/BackButton";
function Demographics() {
  return (
    <div className="flex flex-col items-center h-full lg:ml-64 p-5">
      <h1 className="my-5 text-2xl text-gray-200 font-lupio">Demographic Analytics</h1>
      <div className="w-full flex justify-start mb-4">
  		  <BackButton />
		  </div>
			<BarChartComponent />
    </div>
  );
}
export default Demographics;
