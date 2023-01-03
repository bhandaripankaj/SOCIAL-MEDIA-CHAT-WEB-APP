import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter,  Route,Routes, } from "react-router-dom";
import "./style.css";
const root = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
    <div className="foo">
    <App />
    </div>
</BrowserRouter>,
root);
