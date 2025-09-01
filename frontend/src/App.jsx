// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="bg-color-secondary text-white min-h-[calc(100vh-5rem)] flex flex-col items-center">
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/sign-in" element={<SignIn></SignIn>}/>
      <Route path="/sign-up" element={<SignUp></SignUp>}/>
      <Route path="/about" element={<About></About>}/>
      <Route element={<PrivateRoute></PrivateRoute>}>
      <Route path="/profile" element={<Profile></Profile>}/>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
