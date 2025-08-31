import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DemographicsCard() {
  const [demographics, setDemographics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDemographics = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-demographic");
        setDemographics(res.data);
      } catch (error) {
        console.error("Error fetching demographics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDemographics();
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md">
        <p className="text-gray-500">Loading demographics...</p>
      </div>
    );
  }

  return (
    <div className="w-[20rem] h-full p-4 bg-white rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Demographics</h2>
      <ul className="space-y-2">
        {demographics.map((item, index) => (
          <li
            key={index}
            className="flex justify-between p-2 bg-gray-50 rounded-lg"
          >
            <span className="font-medium">{item.demographic}</span>
            <span className="text-gray-600">{item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
