import React from "react";
import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
      e.preventDefault()

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

 <RegisterForm>
        <h2>Name</h2>
        <EmailInput
          id="name"
          name="name"
          value={name}
          type="text"
          placeholder="Enter your name"

    
        />

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
        <PasswordWrapper>
          <h2>Retype your Password</h2>
          <PasswordInput
            id="password2"
            name="password2"
            type="password"
            value={password2}
            placeholder="Retype your password"
            
          />
        </PasswordWrapper>
        <SubmitButton onSubmit={onSubmit}>Submit</SubmitButton>
      </RegisterForm>
)

  return (
    <>
      <Navbar />
      <Heading>
        <RegisterHeader>
          <AccountCircle fontSize="large" />
          <Title>Register</Title>
        </RegisterHeader>
        <p>Please create an account</p>
      </Heading>
      <FormComponent state={formData} setState={setFormData}/>
      <Link to="/login">
       <Question> Already have an account? </Question>
      </Link>
    </>
  );
};

export default Register;
