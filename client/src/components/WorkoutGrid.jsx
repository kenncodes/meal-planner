import React from "react";
import Meal from "./Meal";
import Workout from "./Workout"
import { workoutData } from "../data";
import styled from "styled-components";

const Container = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow:scroll;
  height: 40vh;
`;

const MealsWrapper = styled.div`
margin: 5px;
font-family: "Urbanist", sans-serif;
`;

const Filter = styled.div`
display:inline;
width:100px;

`;

const Meals = () => {
  return (
    <MealsWrapper>
      <Container>
        {workoutData.map((item) => (
          <Workout item={item} key={item.title} />
        ))}
      </Container>
    </MealsWrapper>
  );
};

export default Meals;
