import React, { useState } from 'react';
import axios from 'axios'
import { Button } from './Components/Styles/Button';

const RazorPay = () => {
    const [data, setData] = useState('');
    
    const handlePayment = async () => {
        try {
            await axios.post('http://localhost:4000/api/neworder',{
                amount:20000
            })
            .then((res)=>setData(res.data))
            .catch((err)=>console.log(err))
           

            const options = {
                key:`${data.key_id}`,
                amount:data.amount, 
                currency: 'INR',
                name: 'PrepBytes Clone',
                description: 'Payment for Purchase',
                order_id: data.order_id,
              
            };
           
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script)
            script.onload = () => {
                const rzp = new window.Razorpay(options);
                rzp.open();
                // Now you can use rzp to open the payment dialog
            }
            
        } catch (error) {
            console.error(error);
        }
    };

  


    return (
        <div>
            <Button onClick={handlePayment}>BUY NOW</Button>
        </div>
    );
};

export default RazorPay