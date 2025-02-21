// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/sign-in" element={<SignIn></SignIn>}/>
      <Route path="/sign-up" element={<SignUp></SignUp>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/profile" element={<Profile></Profile>}/>
    </Routes>
      <div className="container mx-auto m-0 md:px-4 bg-cyan-400">
        <h1 className="text-3xl font-bold underline text-red-700">
          Hello world!
        </h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
