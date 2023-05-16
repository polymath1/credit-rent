import React, { useState } from "react";

import PayPal from "./PayPal";

export default function Home() {

const [checkout, setCheckOut] = useState(false);

   return ( 
      
      <div classname = "Home">

         {checkout ? (
            <div>
               <title>document</title>
               <input type="number" id="amount"></input>
            <PayPal />
            
            </div>
          ) : (



         <button 
            onClick={() => {
               setCheckOut(true);
            }}     
            >
               Checkout
               </button>
   )}
               </div>
   );


}