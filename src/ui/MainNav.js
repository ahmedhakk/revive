import React from "react";
import classes from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import { SlCompass } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
// import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoIosChatboxes } from "react-icons/io";
// import { FaRegNoteSticky } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const MainNav = () => {
  return (
    <nav>
      <ul className={classes.navlist}>
        <li>
          <NavLink className={classes.styledNavlink} to="/dashboard">
            <SlCompass />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.styledNavlink} to="/member">
            <IoPersonOutline />
            <span>Member</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink className={classes.styledNavlink} to="/today-tasks">
            <RiCalendarScheduleLine />
            <span>Today Tasks</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink className={classes.styledNavlink} to="/inbox">
            <IoIosChatboxes />
            <span>Inbox</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink className={classes.styledNavlink} to="/note">
            <FaRegNoteSticky />
            <span>Note</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink className={classes.styledNavlink} to="/settings">
            <IoSettingsOutline />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
