import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Completed", value: 35, color: "#FFB200" }, // Orange
  { name: "Delayed", value: 35, color: "#FF3A29" }, // Tomato
  { name: "Ongoing", value: 30, color: "#4339F2" }, // SteelBlue
];

const RADIAN = Math.PI / 180;

function renderCustomizedLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

function OverallProgressChart() {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        // label={renderCustomizedLabel}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend height={36} />
    </PieChart>
  );
}

export default OverallProgressChart;
