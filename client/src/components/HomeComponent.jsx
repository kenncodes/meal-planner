import React from "react";
import styled from "styled-components";
import MealsGrid from "../components/MealsGrid";
import MediaQuery from "react-responsive";
import {mobile,desktop } from '../responsive'
const HomeComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    text-align: center;
  `;

  const ToDoContainer = styled.div``;

  const Title = styled.h1`
    font-weight: ${(props) => props.weight};
  `;
  const ButtonWrapper = styled.div`
    display: flex;
   
    flex: 1;
    justify-content: center;
    
  `;

  const ButtonWrapperDesktop = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex: 1;
    justify-content: space-between;
    padding:10px;
    
  `;

  const Button = styled.button`
    padding:10px;
    border-radius: 10px;
    font-size:15px;
    color:white;
  `;
  const DateTitle = styled.div`
    font-weight: 900;
  `;

  const PlanWrapper = styled.div`
    font-weight: 400;
  `;

  const Left = styled.div`
    display: block;
    flex-wrap: none;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top:20px;
  `;

  const Right = styled.div`
    flex: 2;
  `;
  const TitleCalories = styled.div`
    padding-top: 10px;
    font-size: 30px;
    text-align: center;
    justify-content: center;
  `;

  const UserSpan = styled.span`
    color: green;
  `;

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Left>
        <DateTitle>
          {currentMonth}/{currentDate}/{currentYear}
        </DateTitle>
        <Title>
          Welcome <UserSpan >User</UserSpan>
        </Title>
        <MediaQuery maxWidth={600}>
        <ButtonWrapper >
          <Button className="logButton" variant="contained">
            Log Weight
          </Button>
          <Button className="logButton" variant="contained">
            Log Workout
          </Button>
          <Button className="logButton" variant="contained">
            Log Meal
          </Button>
        </ButtonWrapper>
        </MediaQuery >
        <TitleCalories weight="200">Net Calories: 2100</TitleCalories>
        <TitleCalories weight="200">Current Weight: 188 lbs</TitleCalories>
        <MediaQuery minWidth={600}>
        <ButtonWrapperDesktop>
          <Button className="logButton" variant="contained">
            Log Weight
          </Button>
          <Button className="logButton" variant="contained">
            Log Workout
          </Button>
          <Button className="logButton" variant="contained">
            Log Meal
          </Button>
        </ButtonWrapperDesktop>
        </MediaQuery>
      </Left>
      <Right>
        <MealsGrid />
      </Right>
    </Container>
  );
};

export default HomeComponent;
