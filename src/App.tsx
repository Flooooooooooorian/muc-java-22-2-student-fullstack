import React from 'react';
import './App.css';
import StudentApp from "./components/StudentApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />

            <Routes>
                <Route path={""} element={<p>Hallo Welt</p>}></Route>
                <Route path={"/home"} element={<Home />}></Route>
                <Route path={"/students"} element={<StudentApp />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
