import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const consentData = [
  { date: "2025-08-01", agree: 45, disagree: 5 },
  { date: "2025-08-05", agree: 60, disagree: 10 },
  { date: "2025-08-10", agree: 80, disagree: 15 },
  { date: "2025-08-15", agree: 100, disagree: 20 },
  { date: "2025-08-20", agree: 120, disagree: 25 },
  { date: "2025-08-25", agree: 150, disagree: 30 },
];

export default function ConsentTrendChart() {
  return (
    <div className="w-full h-full p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Consent Trend Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={consentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="agree" stroke="#4ade80" strokeWidth={3} dot={{ r: 5 }} name="Agreed" />
          <Line type="monotone" dataKey="disagree" stroke="#f87171" strokeWidth={3} dot={{ r: 5 }} name="Disagreed" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}