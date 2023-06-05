import React, { useRef, useEffect, useState} from 'react';
import { Button, Card } from 'react-bootstrap';
 import { useAuth } from '../contexts/AuthContext'; 
 import { Link, useNavigate } from "react-router-dom";

export default function PayPal() { 

    const paypal = useRef();
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth("") 
    const avigate = useNavigate()


  async  function handleLogout() {
    setError('')

    try {
        await logout()
        avigate('/LogIn')
    } catch {  
         setError('Failed to Log Out')
    }
   }  



    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err ) => {
                return  actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            descriptions: "cool looking ",
                            amount: {
                                currency_code: "CAD",
                                value: 650.55
                            }
                        }
                    ]
                }) 
            },
            onApprove: async (data, actions) => {
                const order = await  actions.order.capture();
                console.log(order);

            },

            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, )
    return (
        <Card>
        <div>
            <strong>Email:</strong> {currentUser.email} 
            <div ref={paypal}></div> 
            <Button variant="link" onClick={handleLogout}>LogOut</Button>
        </div>
        </Card>
    )
}
