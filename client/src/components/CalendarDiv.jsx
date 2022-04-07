import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Calendar from "react-calendar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  ${mobile({ display: "inline", flexwrap: "none" })}
`;

const Left = styled.div`
  align-items: center;
  border: 2px solid blue;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid green;
  flex: 1;
`;
const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

const CalendarWrapper = styled.div``;

const months = ["January", "February", "March", "April", "May"];

const MonthText = styled.div`
display:flex;
flex:1;
justify-content:center;
`;

const IconWrapper = styled.div`
display:flex;
text-align:center;

justify-content:center;
flex:1;`;

const CalendarDiv = () => {
  const [month, setMonth] = useState(new Date().getMonth());

  const decrementMonth = () => {
   
    if (month === 0) {
      setMonth(months.length-1);
    }else{
        setMonth((month) => month - 1);
    }
  };

  const incrementMonth = () => {
    if (month === months.length-1) {
      setMonth(0);
    } else {
      setMonth((month) => month + 1);
    }
  };

  return (
    <Container>
      <Left>
        <MonthWrapper>
          <IconWrapper><ArrowLeftIcon cursor="pointer" onClick={decrementMonth} /></IconWrapper>
          <MonthText>{months[month]}</MonthText>
          <IconWrapper><ArrowRightIcon cursor="pointer" onClick={incrementMonth} /></IconWrapper>
        </MonthWrapper>
        <CalendarWrapper></CalendarWrapper>
      </Left>
      <Right>right</Right>
    </Container>
  );
};

export default CalendarDiv;
