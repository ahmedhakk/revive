import React from "react";
import SearchInput from "../../ui/SearchInput";
import MemberTable from "./MemberTable";

const MemberStatus = () => {
  return (
    <>
      <SearchInput placeholder="Search for member" />

      <MemberTable />
    </>
  );
};

export default MemberStatus;
