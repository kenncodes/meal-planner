import React from "react";
import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
  }
  const onSubmit = (e) => {
      e.preventDefault()
      console.log(formData)

  }
  const Heading = styled.div`
    text-align: center;
  `;
  const RegisterHeader = styled.h1``;

  const Title = styled.div``;
  const RegisterForm = styled.form`
    text-align: center;
  `;
  const EmailInput = styled.input`
    width: 60%;
    max-width: 500px;
  `;
  const PasswordWrapper = styled.div`
    padding: 5px;
    margin: 5px;
  `;
  const PasswordInput = styled.input`
    width: 60%;
    max-width: 500px;
  `;

  const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
  `;


  const Question = styled.p`
  text-align:center`;

const FormComponent = ({setState, state, label}) => (
    <form>
 <RegisterForm>

        <h2>Email</h2>
        <div>
          <EmailInput
            id="email"
            name="email"
            value={email}
            type="text"
            placeholder="Enter your email"
           
          />
        </div>

        <PasswordWrapper>
          <h2>Password</h2>
          <PasswordInput
            id="password"
            name={password}
            type="password"
            value={password}
            placeholder="Enter your password"
           
    
          />
        </PasswordWrapper>
        <SubmitButton onSubmit={onSubmit}>Submit</SubmitButton>
      </RegisterForm>
    </form>
)

  return (
    <>
      <Navbar />
      <Heading>
        <RegisterHeader>
          <AccountCircle fontSize="large" />
          <Title>Login</Title>
        </RegisterHeader>
        <p>Login to your calorie counter</p>
      </Heading>
      <FormComponent state={formData} setState={setFormData}/>
      <Link to="/register">
       <Question> Dont have an account? </Question>
      </Link>
    </>
  );
};

export default Login;
