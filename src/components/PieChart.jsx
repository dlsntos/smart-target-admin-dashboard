import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from "recharts";

const consentData = [
  { name: "Agree", value: 120 },
  { name: "Disagree", value: 45 },
];

const COLORS = ["#10b981", "#ef4444"];

function PieChartComponent() {
  return (
    <div className="w-full h-64 sm:h-96 md:h-72 lg:h-full bg-white dark:bg-gray-800 p-2 sm:p-4 sm:p-6 rounded-2xl shadow">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={consentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="60%" // Reduced from 80% to prevent overflow on small screens
            label={({ name, value }) => {
              // Shorter labels on very small screens
              if (typeof window !== 'undefined' && window.innerWidth < 500) {
                return `${name.charAt(0)}: ${value}`;
              }
              return `${name}: ${value}`;
            }}
            labelLine={false}
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
              fontSize: "0.8rem", // Smaller font for mobile
            }}
          />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ fontSize: "0.75rem", fontWeight: "500" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;