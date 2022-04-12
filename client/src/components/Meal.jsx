import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: "Urbanist", sans-serif;
  margin: 0;
  border: 2px black solid;
  justify-self: center;
`;

const Image = styled.img`
  display: flex;
  align-items: center;
  width: 80px !important;
`;

const Desc = styled.div`
  flex: 3;
  padding: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calories = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 20px;
  border-left: 2px solid green;
  justify-content: center;
`;

const TimeOfDay = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 20px;
  border-right: 2px solid green;
  justify-content: center;
`;

const Meal = ({ item }) => {
  return (
    <Container>
      <TimeOfDay>{item.meal} </TimeOfDay>
      <Desc>{item.title} </Desc>
      <Calories>{item.calories}</Calories>
    </Container>
  );
};

export default Meal;
/*
<Image src={`${item.img}?w=140&h=140&fit=crop&auto=format`} />
    
*/
