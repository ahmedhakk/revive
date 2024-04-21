import classes from "./AppLayout.module.css";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className={classes.AppLayout}>
      <Sidebar />

      <Header />

      <main className={classes.main}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
