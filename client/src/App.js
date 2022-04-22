import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Calendar from './pages/Calendar'
import Stats from './pages/Stats'
import Navbar from './components/Navbar'
import Meals from './pages/Meals'
import { Link } from "react-router-dom";
import Header from "./components/Header";

import './App.css'
const App = () => {
  return (
    <div>

    <Home/>
    <ToastContainer/>
  </div>
  )
}

export default App
