import React, {useState} from 'react';
import './App.css';
import StudentApp from "./components/StudentApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import StudentDetails from "./components/StudentDetails";
import LoginPage from "./components/LoginPage";
import useUser from "./hooks/useUser";

function App() {

    const {username, login, logout} = useUser();

  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar logout={logout}/>
            <h2>Hallo {username}!</h2>

            <Routes>
                <Route path={""} element={<p>Hallo Welt</p>}></Route>
                <Route path={"/home"} element={<Home />}></Route>
                <Route path={"/students"} element={<StudentApp />}></Route>
                <Route path={"/students/:id"} element={<StudentDetails />}></Route>
                <Route path={"/login"} element={<LoginPage login={login}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
