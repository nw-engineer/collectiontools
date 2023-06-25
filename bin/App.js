import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.2.0.25:8000/timeseries-data');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = data.map(item => ({
    timestamp: moment(item[0]).format('YYYY-MM-DDTHH:mm:ss'),
    value: item[1],
    prediction: item[2],
    lowerLimit: item[3],
    upperLimit: item[4],
  }));

  return (
    <div className="App">
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="blue" name="value" />
        <Line type="monotone" dataKey="prediction" stroke="green" name="yhat" />
        <Line type="monotone" dataKey="lowerLimit" stroke="red" name="yhat_lower" />
        <Line type="monotone" dataKey="upperLimit" stroke="orange" name="yhat_upper" />
      </LineChart>
    </div>
  );
};

export default App;