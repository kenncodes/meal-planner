import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store'
import { Provider } from 'redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Meals from "./pages/Meals"
import Calendar from "./pages/Calendar"
import Stats from "./pages/Stats"
import AddWeight from './pages/AddWeight'
import AddWorkout from './pages/AddWorkout'
import AddMeal from './pages/AddMeal';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/meals" element={<Meals/>} />
    <Route path="/calendar" element={<Calendar/>} />
    <Route path="/stats" element={<Stats/>} />
    <Route path="/weight" element={<AddWeight/> } />
    <Route path="/workout" element= {<AddWorkout/>} />
    <Route path="/meal" element= {<AddMeal/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
