import React from "react";
import classes from "./UserProfile.module.css";
import { CiCircleChevDown } from "react-icons/ci";

// You can pass the user data as props, or fetch from a state or context.
const UserProfile = ({ name, title, avatarUrl }) => {
  return (
    <div className={classes.userProfile}>
      {/* <img
        src="../assets/image-1.jpg"
        alt={name}
        className={classes.userAvatar}
      /> */}
      <div className={classes.userInfo}>
        <h1 className={classes.userName}>{name}</h1>
        <p className={classes.userTitle}>{title}</p>
      </div>
      <button className={classes.userDropdownButton}>
        <span className={classes.dropdownIcon}>
          <CiCircleChevDown />
        </span>
      </button>
    </div>
  );
};

export default UserProfile;
