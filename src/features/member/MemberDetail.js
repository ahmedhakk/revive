import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Tag from "../../ui/Tag";
import Card from "../../ui/Card";
import { MdOutlineLayers } from "react-icons/md";
import classes from "./MemberDetail.module.css";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const MemberDetail = () => {
  const params = useParams();
  console.log(params.memberId); // 065

  //   Fetch member data
  const MEMBER_DATA = {
    id: "055",
    username: "a55",
    name: "Ahmed",
    email: "ahmed@gmail.com",
    phone: "0123456789",
    joinDate: "15/6/2022",
    status: "processing",
    training_list: [
      {
        pain_name: "Back Pain",
        time: "10 mins/day",
        training_name: "Inline lunge",
        duration: "2 Weeks",
      },
      {
        pain_name: "Back Pain",
        time: "10 mins/day",
        training_name: "Inline lunge",
        duration: "2 Weeks",
      },
      {
        pain_name: "Back Pain",
        time: "10 mins/day",
        training_name: "Inline lunge",
        duration: "2 Weeks",
      },
    ],
  };

  const statusToTagName = {
    processing: "blue",
    completed: "green",
    "on-hold": "silver",
  };

  return (
    <>
      <StyledInfo>
        <h2>{MEMBER_DATA.name}</h2>

        <Tag type={statusToTagName[MEMBER_DATA.status]}>
          {MEMBER_DATA.status.replace("-", " ")}
        </Tag>
      </StyledInfo>

      {MEMBER_DATA.training_list.map((training) => (
        <Card className={classes.card}>
          <Wrapper>
            <MdOutlineLayers className={classes.icon} />
            <div>
              <p>
                <span className={classes.bold}>{training.pain_name} </span>
                {training.time}
              </p>

              <p>
                <span>{training.training_name} </span>
                {training.duration}
              </p>
            </div>
          </Wrapper>
        </Card>
      ))}
    </>
  );
};

export default MemberDetail;
