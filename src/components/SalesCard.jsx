import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SalesCard() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-sales");
        setSales(res.data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-4xl">
        <p className="text-gray-500">Loading sales...</p>
      </div>
    );
  }

  return (
    <div className=" h-full p-4 bg-white rounded-xl shadow-md w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">Sales Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Demographic</th>
              <th className="px-4 py-2 text-left">Used</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b">
                <td className="px-4 py-2">{sale.product}</td>
                <td className="px-4 py-2">${sale.price.toFixed(2)}</td>
                <td className="px-4 py-2">{sale.demographic}</td>
                <td className="px-4 py-2">{sale.used ? "Yes" : "No"}</td>
                <td className="px-4 py-2">{new Date(sale.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
