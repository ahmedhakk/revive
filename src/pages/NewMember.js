import React from "react";

import Card from "../ui/Card";
import Row from "../ui/Row";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const SaveBtn = styled.div`
  text-align: right;
`;

const AddNewBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: bold;
`;

const NewMember = () => {
  return (
    <>
      <p>
        You can add new member and select the suitable rehabilation plan for
        him.
      </p>

      <div>
        <h3>Patient Data</h3>
        <Card>
          <Row type="horizontal">
            <Input type="text" placeholder="user name" />
            <Input type="text" placeholder="phone number" />
            <Input type="select">
              <option value="">Rehabilitaion</option>
              <option value="BackPain">Back Pain</option>
              <option value="JointPain">Joint Pain</option>
              <option value="KneePain">Knee Pain</option>
              <option value="NeckPain">Neck Pain</option>
            </Input>
          </Row>
          <br />
          <Row type="horizontal">
            <Input type="text" placeholder="name" />
            <Input type="date" placeholder="join date" />
            <Button width="width300px">Save Data</Button>
          </Row>
        </Card>
      </div>
      <div>
        <h3>Assign Rehab Plan</h3>
        <Card>
          <Row type="horizontal">
            <Input type="select">
              <option value="">Exercise</option>
              <option value="DeepSquat">Deep Squat</option>
              <option value="InlineLunge">Inline Lunge</option>
              <option value="HurbleStep">Hurble Step</option>
            </Input>
            <Input type="date" placeholder="join date" />
            <Input type="number" placeholder="times / week" />
          </Row>
          <br />
          <SaveBtn>
            <Button width="width300px">Save Data</Button>
          </SaveBtn>
        </Card>
      </div>
      <SaveBtn>
        <Button width="width300px">
          <AddNewBtnContainer>
            <FaPlus />
            <span>Add New Exercise</span>
          </AddNewBtnContainer>
        </Button>
      </SaveBtn>
    </>
  );
};

export default NewMember;
