import Navbar from "./Navbar";
import Home from "./pages/home"
import LogIn from "./pages/LogIn";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import PayPal from "./pages/PayPal";




function App() {
return ( 
  <>
  <Navbar />
<div className="App">
  
  <div className="container">
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Register" element= {<Register/>} />
      <Route path="/Login" element= {<LogIn/>} />
      <Route path="/PayPal" element= {<PayPal/>} />
      
      
    </Routes>

  </div>
</div> 
</> 
  )
}
export default App;
 