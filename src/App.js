import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/home"
import LogIn from "./pages/LogIn";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import PayPal from "./pages/PayPal";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./contexts/AuthContext";



function App() {
return ( 

  <>
  <Navbar />
 
<AuthProvider>
<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
<div className="App">
  


    <Routes>
      <Route path="/" element= {<Home/>} /> 
      <Route path="/Signup" element= {<Signup/>} />
      <Route path="/Login" element= {<LogIn/>} />
      <Route path="/PayPal" element= {<PayPal/>} />
      
      
    </Routes>
    
  
</div> 
</Container>
</AuthProvider>
</> 
  )
}
export default App;
