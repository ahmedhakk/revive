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

const Details = styled.button`
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

function UserRow({
  member: { id: memberId, username, name, email, phone, joinDate, role },
}) {
  const roleToTagName = {
    doctor: "blue",
    user: "green",
    "on-hold": "silver",
  };

  const navigate = useNavigate();

  return (
    <Table.Row>
      <Username>{username}</Username>

      <Stacked>
        <span>{name}</span>
        <span>{phone}</span>
      </Stacked>

      <Stacked>
        <span>{phone}</span>
        <span>{email}</span>
      </Stacked>

      <span>{joinDate}</span>

      <Tag type={roleToTagName[role]}>{role.replace("-", " ")}</Tag>

      <Details onClick={() => navigate(`/member/status/${memberId}`)}>
        View datails
      </Details>
    </Table.Row>
  );
}

export default UserRow;
