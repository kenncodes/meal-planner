import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Container = styled.div`
  margin: 20px;
  maxwidth: 500px;
  border: 2px solid green;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const DatePicker = styled.input`
  type: date;
  font-size:2rem;
`;
const WeightInput = styled.input`
  type: date;
  font-size: 2rem;
`;
const Button = styled.button`
padding: 10px;
border-radius: 10px;
font-size: 15px;
color: white;
background-color:purple;
margin-top:20px;
`;

const FormWeight = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = () => {
    console.log(document.getElementById("dateWeight").value)
  };

  const month= new Date().getMonth()
  const year = new Date().getFullYear()
  const date = new Date().getDate()


  return (
    <Container>
      <Title>Date</Title>
<DatePicker type="date" id="dateWeight" name="date-weight" onChange={handleChange} />
      <Title>Weight</Title>
      <InputContainer>
       <WeightInput type="number" min="0" />
      </InputContainer>
      <Button>Log Weight</Button>
    </Container>
  );
};

export default FormWeight;
