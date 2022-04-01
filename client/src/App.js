import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
const App = (props) => {

  const isLoggedIn = false;

  return (
    isLoggedIn ? <Home/> : <Login/>
  )
}

export default App
