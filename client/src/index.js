import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Meals from "./pages/Meals"
import Calendar from "./pages/Calendar"
import Stats from "./pages/Stats"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/meals" element={<Meals/>} />
    <Route path="/calendar" element={<Calendar/>} />
    <Route path="/stats" element={<Stats/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
