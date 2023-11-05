import React from 'react';
import axios from 'axios'
import { Button } from './Components/Styles/Button';

const RazorPay = ({amount,id ,name}) => {
  

    const handlePayment=async()=>{
        try {
            const response = await axios.post('https://prep-clone.onrender.com/api/neworder',{
                amount:amount*100
            });
            const { data } = response;
            console.log(data);
            // setOrder(data);
            const options = {
              key: data.key_id,
              amount: data.amount,
              currency:'INR',
              order_id: data.order_id,
              name: 'Prepbytes clone',
            
              handler: async function (response) {
                // Handle the payment success callback here
                if(response.razorpay_payment_id){
                  const token=localStorage.getItem("token")
                  const token1=window.atob(token.split(".")[1])
                  const jsonString = `${token1}`;
                  const obj = JSON.parse(jsonString);
                  const userId = obj._id;
                    if(id){
                      await axios.post('https://prep-clone.onrender.com/api/dashboard',{id:id, userId:userId})
                    .then((res)=>console.log(res.data))
                    .catch(err=>console.log(err))
                    }
                    if(name==="FullStack Programe"){
                      await axios.post('https://prep-clone.onrender.com/api/fullstack',{userId:userId ,name:name })
                      .then((res)=>console.log(res.data))
                    .catch(err=>console.log(err))
                   }
                   else if(name==="Master Competitive Programming"){
                    await axios.post('https://prep-clone.onrender.com/api/master',{userId:userId ,name:name })
                    .then((res)=>console.log(res.data))
                  .catch(err=>console.log(err))
                   }
                }
              },
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
            console.error('Error creating Razorpay order:', error);
          }
    }

  


    return (
        <div>
            <Button onClick={handlePayment}>BUY NOW</Button>
        </div>
    )
}

export default RazorPay