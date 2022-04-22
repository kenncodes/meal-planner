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

const FormWorkout = () => {
  const [value, setValue] = useState(new Date());
  const [workoutEntry, setWorkoutEntry] = useState({
    Date: new Date(),
    name: "",
    minutes: 0,
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
      <Title> Add Workout</Title>
      <Wrapper>
   
        <InputContainer>
          <Title>Date</Title>
          <DatePicker
            type="date"
            id="dateWorkout"
            name="date-workout"
            onChange={handleChange}
          />
        </InputContainer>
      
   
        <InputContainer>
          <Title>Workout Name</Title>
          <WorkoutInput id="nameWorkout" name="name-workout" type="text" width="10" value={workoutEntry.name} />
        </InputContainer>
     
        <InputContainer>
          <Title>Minutes</Title>
          <WorkoutInput id="minWorkout" name="min-workout" type="number" size="5" value={workoutEntry.minutes} />
        </InputContainer>

        <InputContainer>
          <Title>Calories</Title>
          <CaloriesInput id="calWorkout" name="cal-workout" type="number" min="0" size="5"/>
        </InputContainer>
        <Button>Log Workout</Button>
      </Wrapper>
      <Link to="/">
        {" "}
        <Button>Cancel</Button>
      </Link>
    </Container>
  );
};

export default FormWorkout;
