import React, { useState } from 'react'
import styled from 'styled-components'
import Common from './Common'
import {NavLink, useNavigate} from "react-router-dom"
import { Button } from '../Styles/Button'
import axios from 'axios';

const initialData = ({
   name:"",
   email:"",
   phone:"",
   password:"",
   college:""
})
const Register = () => {
   const [data,setData]=useState(initialData)
   const navi = useNavigate()

   const onChangeHandler = (input , value)=>{
      setData((prev)=>{
        return{
         ...prev,
         [input]:value
        }
      })
   }

   const submitHandler =(e)=>{
      e.preventDefault();
      setData(initialData)
      navi('/login')
      axios.post("https://prep-clone.onrender.com/api/register" ,data)
      .then((res)=>console.log(res.data))
      .catch(err => console.log(err))
   }
  return (
     <>
    <Wrapper>
         <Common/>
        <div className='signupForm'>

         <div className='flex links'>
               <NavLink to='/login'><div className='link link2'> Login</div></NavLink>
               <NavLink to='/register'><div className='link link1'> Sign Up</div></NavLink>
               
         </div>

         <div className='heading'>Create your new account<account></account></div>

         <form className='flex flex-column'>
            <div className='input-form'>
            <input type='text' placeholder=' ' onChange={(e)=>onChangeHandler('name',e.target.value)} value={data["name"]} autoComplete='off' />
            <span>Name</span>
            </div>
            <div className='input-form'>
            <input type='email' placeholder=' ' onChange={(e)=>onChangeHandler('email',e.target.value)} value={data["email"]} autoComplete='off'/>
            <span>Email</span>
            </div>
            <div className='input-form'>
            <input type='number' placeholder=' ' onChange={(e)=>onChangeHandler('phone',e.target.value)} value={data["phone"]} autoComplete='off'/>
            <span>Phone</span>
            </div>

            <div className='input-form'>
            <input type='password' placeholder=' ' onChange={(e)=>onChangeHandler('password',e.target.value)} value={data["password"]} autoComplete='off'/>
            <span>Password</span>
            </div>

            
            <div className='input-form'>
            <input type='text' placeholder=' ' onChange={(e)=>onChangeHandler('college',e.target.value)} value={data["college"]} autoComplete='off'/>
            <span>College</span>
            </div>

            


           
            <Button onClick={submitHandler}>Sign Up</Button>
         </form>
         

        </div>
    
    </Wrapper>
     </>
  )
}

const Wrapper = styled.section`
   display:flex;
   justify-content:space-around;
   align-items:center;
   background:#6499E9;
   padding:4rem 0;
   .signupForm{
    width:30vw;
    background-color:white;
    border-radius:1rem;
    padding:4rem;
    text-align:center;
   }


   
   .CandP{
    justify-content:space-between;

   }
   .heading{
      font-size:2.5rem;
      color:#7D7C7C;
      margin:2rem 0;
      
   }
   
   .links{
    font-size:2.5rem;
    justify-content:space-evenly;
    .link{
       width:20rem;
       padding-bottom:1rem;
       text-transform:uppercase;
       
    }
    
    .link1{
       color:#6499E9; 
       border-bottom:4px solid #6499E9; 
   }
   .link2{
    color:#45474B;
    border-bottom:2px solid #6499E9; 
   }

 }
   form{
      
      justify-content:space-between;
      

      input{
         font-size:2rem;
         width:100%;
         border: transparent;
         background-color: transparent;
         border-bottom: 2px solid lightgray;
         margin:2.5rem 0;
         
        }
        select{
          font-size:1.5rem;
          width:13rem;
          border: transparent;
          border-bottom: 2px solid lightgray;
          margin:3rem 0;
      }
      input:hover, select:hover{
         
        border-bottom: 3px solid black;
     }
      input:focus, select:focus{
         outline:none;
         border-bottom: 2px solid #192655;
         

      }
     option{
      font-size:1.5rem;
     }
      input:focus ~ span,select:focus ~ span ,select:not(:placeholder-shown) + span, input:not(:placeholder-shown) + span{
         font-size: 1.5rem;
         top: -.2rem;
          color:#192655 ;
          transition: 0.5s;
      }
      .input-form{
         position:relative;
      }
     
      span{
         font-size:1.6rem;
         position:absolute;
         left:0rem;
         top:2.5rem;
      }

      button{
         width:100%;
         background-color:#3876BF;
         border:2px solid #3876BF;
         padding:1rem 2rem;
      }
   }

   @media only screen and (max-width:${({theme})=>theme.media.mobile}){
      flex-direction:column;
      .signupForm{
         width:90vw;
         padding:2rem;
         margin-bottom:3rem;
      }
      form{
         input{
            width:100%;
         }
      }
   }
   @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
      flex-direction:column;
      .signupForm{
         width:90vw;
         padding:2rem;
         margin-bottom:3rem;
      }
      form{
         input{
            width:100%;
         }
      }
   }
`

export default Register
