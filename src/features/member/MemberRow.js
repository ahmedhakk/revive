import styled from "styled-components";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

const Username = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Report = styled.a`
  font-family: "Sono";
  font-weight: 500;
  text-decoration: underline;
  color: var(--main-color);
`;

function MemberRow({
  member: { id, username, name, email, phone, joinDate, status },
}) {
  const statusToTagName = {
    processing: "blue",
    completed: "green",
    "on-hold": "silver",
  };

  return (
    <Table.Row>
      <Username>{username}</Username>

      <span>{name}</span>

      <Stacked>
        <span>{phone}</span>
        <span>{email}</span>
      </Stacked>

      <span>{joinDate}</span>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Report href="#">View report</Report>
    </Table.Row>
  );
}

export default MemberRow;
