import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ConsentTrendChart() {
  const [consentData, setConsentData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/consent-trend-daily") // Flask endpoint
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) setConsentData(data.data);
      })
      .catch((err) => console.error("Failed to fetch consent trend:", err));
  }, []);

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
          <Line
            type="monotone"
            dataKey="agree"
            stroke="#4ade80"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="Agreed"
          />
          <Line
            type="monotone"
            dataKey="disagree"
            stroke="#f87171"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="Disagreed"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
