import React, { useRef, useEffect} from 'react';



export default function PayPal() {

    const paypal = useRef();
   

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
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
