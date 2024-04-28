import styled from "styled-components";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { useNavigate } from "react-router-dom";

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

const Report = styled.button`
  font-family: "Sono";
  font-weight: 500;
  text-decoration: underline;
  color: var(--main-color);
  background: transparent;
  border: none;
  width: fit-content;

  &:focus {
    outline: none;
  }
`;

function MemberRow({
  member: { id: memberId, username, name, email, phone, joinDate, status },
}) {
  const statusToTagName = {
    processing: "blue",
    completed: "green",
    "on-hold": "silver",
  };

  const navigate = useNavigate();

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

      <Report onClick={() => navigate(`/member/status/${memberId}`)}>
        View report
      </Report>
    </Table.Row>
  );
}

export default MemberRow;
