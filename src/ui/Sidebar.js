import React from "react";
import MainNav from "./MainNav";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h1 className={classes.title}>Revive</h1>

      <MainNav />
    </aside>
  );
};

export default Sidebar;
