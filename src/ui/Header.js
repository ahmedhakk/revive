import React from "react";

import classes from "./Header.module.css";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className={classes.styledHeader}>
      <SearchInput />
      <UserProfile
        name="Ahmed"
        title="Doctor"
        // avatarUrl="../assets/image-1.jpg"
      />
    </header>
  );
};

export default Header;
