import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Text } from "recharts";

const data = [
  { name: "Home", value: 88, color: "#FF6347" }, // Tomato red
  { name: "Clinic", value: 12, color: "#F5F5F5" }, // Very light grey, almost white
];

const RADIAN = Math.PI / 180;

function CustomLabel({ viewBox, value }) {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill="black"
      className="recharts-text recharts-label"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan alignmentBaseline="middle" fontSize="30">
        {value}%
      </tspan>
    </text>
  );
}

function RehabAtHomeChart() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        labelLine={false}
        // label={<CustomLabel value={data[0].value} />}
        startAngle={90}
        endAngle={-270}
        innerRadius={70}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
        cornerRadius={20}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
}

export default RehabAtHomeChart;
