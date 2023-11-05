import React from 'react'
import styled from 'styled-components'
import {BsCheckAll} from "react-icons/bs"

const PaymentPlans = ({set}) => {
  return (
    <Wrapper>
        <div className='container'>
            <h1>Payment Plans</h1>
            <h2>Choose a payment plan suiting your needs</h2>

            <div className='payment'>
                <h2>Pay Upfront*</h2>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp' alt='money'/>
                <p>Pay Now</p>
                <h3>₹ 70,000</h3>
                <hr/>
                <span className='guarantee'>*Money-back guarantee on placements</span>
                <p>EMI Starting at</p>
                <p><span>₹ 5833</span>/month</p>
            </div>
            <button onClick={()=>set(true)}>Register</button>
        </div>
        
            <p className='Lpa'> <BsCheckAll className='icon'/> Guaranteed Placement of minimum 5 LPA</p>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
    text-align:center;
    background: #fdf0d7;
    padding:5rem;
    .container{
        padding:4rem 0;
    }
    h1{
        font-size:4rem;
        font-weight:bold;
        color:#45474B;
    }
    p{
        margin:1.5rem 0;    
        font-size:2rem;
        
    }
    button{
        color:white;
        background:#0398d3;
        padding:1rem 5rem;
        font-size:2rem;
        border:2px solid #0398d3;
        border-radius:1rem;
    }
    h2{
        margin:0 0  2rem 0 ;    
        color:#45474B;
        font-size:3rem;
        font-weight:lighter;
    }
    h3{
        font-size:2rem;
        margin:1rem 0;
        color:#0398d3;
    }
    span{
        color:#0398d3;

    }
    .guarantee{
        color:black;
    }
    img{
        width:20rem;
        position:absolute;
        right:-1.4rem;
        top:2rem;
        
    }
    .payment{
        text-align:left;
        width:30vw;
        padding:2.5rem;
        margin:4rem auto;  
        background: #d6f4ff;
        box-shadow:0 0 10px hsla(0,0%,55.3%,.1607843137254902);
        border-radius: 17px; 
        position:relative;
    }

    .icon{
        color:#f78077;
        font-size:3rem;
        margin-right:1rem;
    }
    .Lpa{
        display:flex;
        align-items:center;   
        margin-left:10rem;
        
    }
    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        .payment{
            width:60%;
        }
        .guarantee{
            font-size:1.5rem;
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        padding:5rem 0;
        .payment{
            width:85vw;
        }
        h2{
            font-size:2.5rem;
        }
        img{
            width:45vw;
        }
        .Lpa{
            width:80vw;
            margin:2rem auto;
        }
    }
`

export default PaymentPlans
