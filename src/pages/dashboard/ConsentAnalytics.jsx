import PieChartComponent from "../../components/PieChart";
function ConsentAnalytics () {
	return(
		<div className="flex flex-col items-center h-full ml-64">
			<h1 className="my-5 text-2xl text-gray-200 font-lupio">Consent Analytics</h1>
			<PieChartComponent />
		</div>
	);
}
export default ConsentAnalytics;