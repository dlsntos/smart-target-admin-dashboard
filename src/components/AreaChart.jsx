import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

("use client");

const demographic = [
  { ageGroup: "Young", male: 40, female: 35 },
  { ageGroup: "Adult", male: 60, female: 55 },
  { ageGroup: "Senior", male: 30, female: 25 },
];

function AreaChartComponent() {
  return (
    <div className="w-2/3 h-80">
      <h1 className="text-xl font-bold mb-4">Area Chart</h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={demographic}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ageGroup" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="male" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="female" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaChartComponent;
