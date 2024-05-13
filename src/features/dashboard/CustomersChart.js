import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "New Customers", value: 100, color: "#6495ED" }, // CornflowerBlue
  { name: "Repeated", value: 1420, color: "#D3D3D3" }, // LightGrey
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const RADIAN = Math.PI / 180;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Display data values
  return (
    <text
      x={x}
      y={y}
      fill={data[index].color}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index].value}
    </text>
  );
};

function CustomersChart() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius={80}
        innerRadius={50}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default CustomersChart;
