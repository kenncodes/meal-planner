import React from "react";
import styled from "styled-components";
import MealsGrid from "../components/MealsGrid";
import WorkoutGrid from "../components/WorkoutGrid";
import MediaQuery from "react-responsive";
import { mobile, desktop } from "../responsive";
import { Link } from "react-router-dom";
import AddWeight from "../pages/AddWeight";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const HomeComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    text-align: center;
  `;

  const ToDoContainer = styled.div``;

  const Title = styled.h1`
    font-weight: ${(props) => props.weight};
    padding: 0px;
    margin: 5px;
    ${mobile({ fontSize:"25px" })}
  `;
  const ButtonWrapper = styled.div`
    display: flex;

    flex: 1;
    justify-content: center;
  `;

  const ButtonWrapperDesktop = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    align-iitems: center;
    text-align: center;
  `;

  const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  `;
  const DateTitle = styled.div`
    font-weight: 900;
    font-size: 20px;
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
    margin-top: 20px;
  `;

  const Right = styled.div`
    flex: 2;
  `;
  const TitleCalories = styled.div`
    padding-top: 10px;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    ${mobile({ fontSize: "20px"})}
  `;

  const UserSpan = styled.span`
    color: green;

   
    `;

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const NavContainer = styled.ul`
    padding: 10px;
    margin: 0px;
    display: flex;
  `;

  const NavItem = styled.li`
    list-style: none;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    &:hover {
      background-color: green;
    }
    ${mobile({ padding: "0px" })}
  `;

  const Wrap = styled.div`
    width: 100%;
  `;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SpanGreen = styled.span`
    color:green;
  `;

  return (
    <Container>
      <Left>
        <DateTitle>
          {currentMonth}/{currentDate}/{currentYear}
        </DateTitle>
        <Title>
          Welcome <UserSpan>User</UserSpan>
        </Title>
        <MediaQuery maxWidth={600}>
          <ButtonWrapper>
            <Link to="/weight">
              <Button className="logButton" variant="contained">
                Log Weight
              </Button>
            </Link>
            <Link to="/workout">
              {" "}
              <Button className="logButton" variant="contained">
                Log Workout
              </Button>
            </Link>
            <Link to="/meal">
              {" "}
              <Button className="logButton" variant="contained">
                Log Meal
              </Button>
            </Link>
          </ButtonWrapper>
        </MediaQuery>

        <TitleCalories weight="200">Calorie Limit: 2200</TitleCalories>
        <TitleCalories weight="200">Net Calories: 1900</TitleCalories>
        <TitleCalories weight="200">Calories Left: <SpanGreen>300</SpanGreen></TitleCalories>
        <MediaQuery minWidth={600}>
          <ButtonWrapperDesktop>
            <Wrap>
              {" "}
              <Link to="/weight">
                {" "}
                <Button className="logButton" variant="contained">
                  Log Weight
                </Button>
              </Link>
            </Wrap>
            <Wrap>
              {" "}
              <Link to="/workout">
                {" "}
                <Button className="logButton" variant="contained">
                  Log Workout
                </Button>
              </Link>
            </Wrap>
            <Wrap>
              {" "}
              <Link to="/meal">
                {" "}
                <Button className="logButton" variant="contained">
                  Log meal
                </Button>
              </Link>
            </Wrap>
          </ButtonWrapperDesktop>
        </MediaQuery>
      </Left>
      <Right>
      <Box sx={{ width: '100%', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Meals" {...a11yProps(0)} />
          <Tab label="Workouts" {...a11yProps(1)} />
          <Tab label="Weight" {...a11yProps(2)}/>
          <Tab label="Goals" {...a11yProps(3)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <MealsGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <WorkoutGrid />
      </TabPanel>
      <TabPanel value={value} index={2}>
     Weight goes here
      </TabPanel>
      <TabPanel value={value} index={3}>
     Goals go here
      </TabPanel>

    </Box>
        

     
      </Right>
    </Container>
  );
};

export default HomeComponent;
