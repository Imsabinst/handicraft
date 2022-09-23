import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const Chart = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 1800 },
    { name: "March", Total: 1100 },
    { name: "April", Total: 1700 },
    { name: "May", Total: 1200 },
    { name: "June", Total: 1600 },
  ];

  return (
    <div className="chart">
      <div className="title">Last 6 months Revenue</div>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="black" />
          <CartesianGrid
            strokeDasharray="3 3"
            className="chartGrid"
            stroke="gray"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
