import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, ...props }) => {
  if (type === "select")
    return (
      <select className={classes.styledSelect} {...props}>
        {/* options */}
        {props.children}
      </select>
    );

  return <input className={classes.styledInput} type={type} {...props} />;
};

export default Input;
