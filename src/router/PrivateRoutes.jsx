
import React from "react";
import { BrowserRouter,  Route,Routes } from "react-router-dom";
import Home from '../component/home/Home'
const PrivateRoute = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default PrivateRoute
