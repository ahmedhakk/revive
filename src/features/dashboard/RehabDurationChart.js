import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import classes from "./RehabDurationChart.module.css";

const data = [
  { name: "Month", value: 30, color: "#FF3A29" },
  { name: "2M:5M", value: 30, color: "#FFB200" },
  { name: "6+Months", value: 40, color: "#4339F2" },
];

function RehabDurationChart() {
  return (
    <PieChart className={classes.styledChart} width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={100}
        fill="#8884d8"
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

export default RehabDurationChart;
