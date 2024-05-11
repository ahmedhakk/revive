import React from "react";
import Table from "../../ui/Table";
import MemberRow from "../member/MemberRow";
import UserRow from "./UserRow";

const DUMMY_USER = [
  {
    id: "055",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "doctor",
  },
  {
    id: "056",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "user",
  },
  {
    id: "057",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "user",
  },
  {
    id: "058",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "user",
  },
  {
    id: "059",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "doctor",
  },
  {
    id: "060",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "user",
  },
  {
    id: "061",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "doctor",
  },
  {
    id: "062",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    role: "user",
  },
];

const UserMTable = () => {
  return (
    <Table columns="0.6fr 2fr 2fr 1.4fr 1fr 1fr">
      <Table.Header>
        <div>Id</div>
        <div>Name</div>
        <div>Contacts</div>
        <div>Created At</div>
        <div>Role</div>
        <div>Details</div>
      </Table.Header>

      <Table.Body
        data={DUMMY_USER}
        render={(member) => <UserRow key={member.id} member={member} />}
      />
    </Table>
  );
};

export default UserMTable;
