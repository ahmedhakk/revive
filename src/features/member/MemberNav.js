import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MemberNav.module.css";

const MemberNav = () => {
  return (
    <div className={styles.linksContainer}>
      <NavLink to="/member/status" className={styles.link}>
        Membership Status
      </NavLink>
      <NavLink to="/member/new-member" className={styles.link}>
        New Member
      </NavLink>
    </div>
  );
};

export default MemberNav;
