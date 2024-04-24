import React from "react";
import Row from "../ui/Row";
import MemberNav from "../features/member/MemberNav";
import { Outlet } from "react-router";

const Member = () => {
  return (
    <>
      <Row type="horizontal">
        <h1>Member</h1>
        <MemberNav />
      </Row>

      <Outlet />
    </>
  );
};

export default Member;
