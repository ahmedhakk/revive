import React from "react";
import classes from "./Row.module.css";

const Row = ({ type = "vertical", children }) => {
  const rowClass =
    type === "horizontal"
      ? `${classes.row} ${classes.horizontal}`
      : `${classes.row} ${classes.vertical}`;

  return <div className={rowClass}>{children}</div>;
};

export default Row;
