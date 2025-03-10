import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OilPriceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data (replace with actual API call)
    const fetchData = async () => {
      const result = await fetchOilPriceData();
      setData(result);
    };

    fetchData();
  }, []);

  const fetchOilPriceData = async () => {
    // Mock data
    return [
      { date: '2023-01-01', price: 50 },
      { date: '2023-02-01', price: 55 },
      // ... more data points
    ];
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OilPriceChart;
