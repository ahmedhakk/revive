import React from "react";
import SearchInput from "../ui/SearchInput";
import UserMTable from "../features/user_management/UserMTable";

const UserManagement = () => {
  return (
    <>
      <h2>User Management</h2>
      <SearchInput placeholder="Search for user" />

      <UserMTable />
    </>
  );
};

export default UserManagement;
