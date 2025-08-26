import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from "recharts";

const consentData = [
  { name: "Agree", value: 120 },
  { name: "Disagree", value: 45 },
];

const COLORS = ["#10b981", "#ef4444"];

function PieChartComponent() {
  return (
    <div className="w-2/3 h-full bg-white dark:bg-gray-800 p-6 rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={consentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            label={({ name, value }) =>
              `${name} : ${value}`
            }
          >
            {consentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
            }}
          />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ fontSize: "20px", fontWeight: "500" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
