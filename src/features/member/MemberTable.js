import React from "react";
import Table from "../../ui/Table";
import MemberRow from "./MemberRow";

const DUMMY_MEMBERS = [
  {
    id: "055",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "processing",
  },
  {
    id: "056",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "completed",
  },
  {
    id: "057",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "on-hold",
  },
  {
    id: "058",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "completed",
  },
  {
    id: "059",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "processing",
  },
  {
    id: "060",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "completed",
  },
  {
    id: "061",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "on-hold",
  },
  {
    id: "062",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "on-hold",
  },
];

const MemberTable = () => {
  return (
    <Table columns="0.6fr 2fr 2fr 1.4fr 1fr 1fr">
      <Table.Header>
        <div>Id</div>
        <div>Name</div>
        <div>Contacts</div>
        <div>Join Date</div>
        <div>Status</div>
        <div>Report</div>
      </Table.Header>

      <Table.Body
        data={DUMMY_MEMBERS}
        render={(member) => <MemberRow key={member.id} member={member} />}
      />
    </Table>
  );
};

export default MemberTable;
