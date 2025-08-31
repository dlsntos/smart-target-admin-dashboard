import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

function BarChartComponent() {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  const demographicData = [
    { ageRange: "teen", skinColor: "light" , male: 2, female: 1 },
    { ageRange: "adult", skinColor: "light" ,male: 1, female: 1 },
    { ageRange: "teen", skinColor: "dark" , male: 2, female: 1 },
    { ageRange: "adult", skinColor: "dark" ,male: 1, female: 1 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get responsive bar sizes based on screen width
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
            bottom: 20 
          }}
        >
          <CartesianGrid strokeDasharray="3 3" color="white" />
          <XAxis 
            dataKey="ageRange" 
            color="white"
            tick={{ fontSize: screenWidth < 640 ? 12 : 14 }}
          />
          <YAxis 
            color="white"
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
              fontWeight: "500" 
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;