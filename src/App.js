
import React,{useEffect,useState} from "react";
import { BrowserRouter,  Route,Routes, } from "react-router-dom";
import Login from './component/auth/login/Login';
import Signup from "./component/auth/signUp/Signup";
import ForgotPassword from "./component/auth/forgotPassword/ForgotPassword";
import Landing from "./component/landing/Landing";
import Profile from "./component/auth/profile/Profile";
import ImageBox from "./cart/ImageBox";
import ImageCart from "./cart/ImageCart";
import PrivateRoute from './router/PrivateRoutes'
// import Home from './component/home/Home'

const Layout = ({children})=>{
return (
  <>
   <ImageBox/>
       <ImageCart/>
       {children}
       </>
)
}

const App = () => {
  return (
    <>
        <Routes>
        <Route exact path="/" element={<Layout><Landing /></Layout>} />
        <Route exact path="/login" element={<Layout> <Login /></Layout>}/>
        <Route exact path="/signup" element={<Layout><Signup /></Layout>}/>
        <Route exact path="/forgot-password" element={<Layout><ForgotPassword /></Layout>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/home" element={<PrivateRoute />} />
        </Routes>
    </>
  );
}

export default App;
