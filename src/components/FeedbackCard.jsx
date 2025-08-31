import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FeedbackCard() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-feedback");
        // Sort by date descending and take the latest 3
        const sorted = res.data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setFeedback(sorted);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return (
      <div className="h-full p-4 bg-white rounded-xl shadow-md w-full max-w-md">
        <p className="text-gray-500">Loading feedback...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Latest Feedback</h2>
      <ul className="space-y-4">
        {feedback.map((item, index) => (
          <li key={index} className="p-3 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium">{item.email}</p>
            <p className="text-gray-700 mt-1">{item.message}</p>
            <p className="text-gray-400 text-sm mt-1">
              {new Date(item.date).toLocaleDateString()}{" "}
              {new Date(item.date).toLocaleTimeString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
