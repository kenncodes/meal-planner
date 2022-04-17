import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 20px;
  maxwidth: 500px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;
const Title = styled.h1`
  font-weight: 700;
  padding-right: 30px;
`;
const DatePicker = styled.input`
  type: date;
  font-size: 2rem;
`;
const CaloriesInput = styled.input`
  type: date;
  font-size: 2rem;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  background-color: purple;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  border: 2px solid green;
  padding: 10px;
`;

const WorkoutInput = styled.input`
  font-size: 2rem;
`;

const FormMeal = () => {
  const [value, setValue] = useState(new Date());
  const [mealEntry, setMealEntry] = useState({
    Date: new Date(),
    name: "",
    calories: 0,
  });

  const handleChange = () => {
    console.log(document.getElementById("dateWeight").value);
  };

  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date().getDate();

  return (
    <Container>
      <Title> Add Meal</Title>
      <Wrapper>
   
        <InputContainer>
          <Title>Date</Title>
          <DatePicker
            type="date"
            id="dateMeal"
            name="date-meal"
            onChange={handleChange}
          />
        </InputContainer>
      

        <InputContainer>
          <Title>Meal Name</Title>
          <WorkoutInput onChange={handleChange} id="nameMeal" name="name-meal" type="text" width="10" value={mealEntry.name} />
        </InputContainer>
     
        <InputContainer>
          <Title>Calories</Title>
          <CaloriesInput id="calMeal" name="cal-meal" type="number" min="0" size="5"/>
        </InputContainer>
        <Button>Log Weight</Button>
      </Wrapper>
      <Link to="/">
        {" "}
        <Button>Cancel</Button>
      </Link>
    </Container>
  );
};

export default FormMeal;
