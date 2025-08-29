import { useEffect } from "react";
import BarChartComponent from "../../components/BarChart";
import BackButton from "../../components/BackButton";
function Demographics() {
  //change document title
  useEffect(() => {
    document.title = "Demographic Analytics"
  },[]);
  return (
    <div className="flex flex-col items-center h-full lg:ml-64 px-5 py-4 lg:py-5">
      <div className="w-full flex justify-end lg:justify-start mb-4">
  		  <BackButton />
		  </div>
      <h1 className="my-5 text-2xl text-gray-200 font-lupio">Demographic Analytics</h1>
			<BarChartComponent />
    </div>
  );
}
export default Demographics;
