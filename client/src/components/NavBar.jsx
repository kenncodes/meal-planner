import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import HomeIcon from "@mui/icons-material/Home";
import MediaQuery from "react-responsive";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Meals from "../pages/Meals";
import Calendar from "../pages/Calendar";
import Stats from "../pages/Stats";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  margin: 0px !important;
  padding: 0px;
  background-color: orange;
  display: flex;
  font-family: "Urbanist", sans-serif;
  padding: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: right;
  ${mobile({ justifyContent: "center", flex: "1.5" })}
`;
const NavContainer = styled.ul`
  padding: 5px;
  margin: 0px;
`;
const NavItem = styled.li`
  list-style: none;
  display: inline;
  margin: 10px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: green;
  }
  ${mobile({ padding: "5px", margin: "2px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.2em;
  padding: 0px 0px;
  margin: 0px 0px;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Link to="/" className="navLink">
          <Title>CalorieCounter</Title>
        </Link>
      </Left>
      <Right>
        <MediaQuery minWidth={600}>
          <NavContainer>
            <Link to="/" className="navLink">
              {" "}
              Home
            </Link>
            <Link to="/login" className="navLink">
              {" "}
              Login
            </Link>
            <Link to="/register" className="navLink">
              {" "}
              Register
            </Link>
          </NavContainer>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <NavContainer>
            <Link to="/meals" className="navLink">
              <NavItem>
                <MenuBookIcon fontSize="medium" />
              </NavItem>
            </Link>
            <Link to="/calendar" className="navLink">
              <NavItem>
                <EventNoteIcon fontSize="medium" />
              </NavItem>
            </Link>

            <Link to="/login" className="navLink">
              <NavItem>
                <AccountCircle fontSize="medium" />
              </NavItem>
            </Link>
          </NavContainer>
        </MediaQuery>
      </Right>
    </Container>
  );
};

export default Navbar;

/*
  ${mobile({ position: "absolute", bottom: "0px", width: "100%" })}
  ${mobile({ display: "none", flex: "0" })}
  */
