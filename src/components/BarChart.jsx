import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartComponent() {
  const demographicData = [
    { ageRange: "young", male: 2, female: 1 },
    { ageRange: "old", male: 1, female: 1 },
  ];

  return (
    <div className="items-center w-2/3 h-full py-10 mb-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={demographicData} barSize={100} barGap={50}>
          <CartesianGrid strokeDasharray="3 3" color="white" />
          <XAxis dataKey="ageRange" color="white" />
          <YAxis color="white" />
          <Tooltip />
          <Bar dataKey="male" fill="#37378cff" />
          <Bar dataKey="female" fill="#207e44ff" />
          <Legend
            iconSize={20}
            wrapperStyle={{ fontSize: "20px", fontWeight: "500" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default BarChartComponent;
