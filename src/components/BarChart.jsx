import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";

function BarChartComponent() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [demographicData, setDemographicData] = useState([]);

  // Fetch data from Flask API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-demographic");
        // Transform backend data into chart-friendly structure
        const formattedData = res.data.reduce((acc, item) => {
          const [ageRange, skinColor, gender] = item.demographic.split("-");
          const category = `${ageRange}-${skinColor}`; // 👈 combine age + skin color

          // Check if category already exists in acc
          let existing = acc.find((d) => d.category === category);
          if (!existing) {
            existing = { category, male: 0, female: 0 };
            acc.push(existing);
          }

          // Assign male/female counts
          existing[gender] = item.total;
          return acc;
        }, []);

        setDemographicData(formattedData);
      } catch (err) {
        console.error("Error fetching demographics:", err);
      }
    };

    fetchData();
  }, []);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBarSize = () => {
    if (screenWidth < 500) return 40;
    if (screenWidth < 700) return 60;
    return 100;
  };

  const getBarGap = () => {
    if (screenWidth < 500) return 20;
    if (screenWidth < 700) return 35;
    return 50;
  };

  return (
    <div className="items-center w-full sm:w-2/3 h-64 sm:h-80 md:h-96 lg:h-full py-4 sm:py-10 mb-4 sm:mb-10 px-2 sm:px-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={demographicData}
          barSize={getBarSize()}
          barGap={getBarGap()}
          margin={{
            top: 20,
            right: screenWidth < 640 ? 10 : 30,
            left: screenWidth < 640 ? 10 : 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: screenWidth < 640 ? 12 : 14 }}
          />
          <YAxis
            tick={{ fontSize: screenWidth < 640 ? 12 : 14 }}
            width={screenWidth < 640 ? 30 : 40}
          />
          <Tooltip />
          <Bar dataKey="male" fill="#37378cff" />
          <Bar dataKey="female" fill="#207e44ff" />
          <Legend
            iconSize={screenWidth < 640 ? 14 : 20}
            wrapperStyle={{
              fontSize: screenWidth < 640 ? "14px" : "20px",
              fontWeight: "500",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
