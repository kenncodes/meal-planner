import React from "react";
import Meal from "./Meal";
import { itemData } from "../data";
import styled from "styled-components";

const Container = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow:scroll;
  height: 70vh;
`;

const MealsWrapper = styled.div`
margin: 20px;
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
        {itemData.map((item) => (
          <Meal item={item} key={item.title} />
        ))}
      </Container>
    </MealsWrapper>
  );
};

export default Meals;
