// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/sign-in" element={<SignIn></SignIn>}/>
      <Route path="/sign-up" element={<SignUp></SignUp>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/profile" element={<Profile></Profile>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
