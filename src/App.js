import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/layout/Layout";
import Home from "../src/pages/home/Home";
import AboutUs from '../src/pages/aboutUs/AboutUs';
import OurTeam from "./pages/ourTeam/OurTeam";
import Booking from "./pages/booking/Booking";
import Error404 from "./pages/error404/Error404";
import Services from "./pages/services/Services";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import SignUp from "./components/users/signup/SignUp";
import Login from "./components/users/login/Login";
 
 


function App() {
  return (
  
    <Routes>
      <Route path ="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      {/* ================Pages sub-items=================== */}
     <Route path="/aboutus" element={<AboutUs/>}/>
     <Route path="/ourteam" element={<OurTeam/>}/>
     <Route path="/booking" element={<Booking/>}/>
    
     <Route element={<PrivateRoute/>}>
     
     <Route path="/services" element={<Services/>}/>
     <Route path="/blogs" element={<Blogs/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Route>
     <UserAuthContextProvider>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/login" element={<Login/>}/>
      </UserAuthContextProvider>
    
    
    <Route path= "*" element={<Error404/>}/>
    </Route>
    
    </Routes>

  
    
  );
}

export default App;
