import React from "react";
import classes from "./UserProfile.module.css";

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
    </div>
  );
};

export default UserProfile;
