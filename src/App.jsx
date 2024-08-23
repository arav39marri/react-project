import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Sidebars from "./Components/Sidebars";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Home from "./Routs/home";
import Contact from "./Routs/contact";
import About from "./Routs/about";

const App = () => {
  
  const pop={
    name :"Aravind",
    Age : 20
  }
 const obj=[
  {
    name : "Aravind",
    age : 25,
    gender :"Male"

  },
  {
    name : "Abhi",
    age : 24,
    gender :"Male"
    
  },
  {
    name : "laya",
    age : 15,
    gender :"Female"
    
  },
  {
    name : "Aravind",
    age : 25,
    gender :"Male"
    
  }
 ]
  return (                                                  
    <>

    <BrowserRouter>
       <Navbar/>  
       <Sidebars/>   
                                                       
        <Routes>
         
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/elements" element={<Contact/>}></Route>
           <Route path="/component" element={<About/>}></Route>
           <Route path="/body" element={<Body/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
