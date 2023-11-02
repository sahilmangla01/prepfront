import React, { useState } from 'react'
import styled from 'styled-components'
import Common from './Common'
import {NavLink} from "react-router-dom"
import { Button } from '../Styles/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const loginData= {
   email:"",
   password:""
}

const Login = () => {
   const navi = useNavigate()
   const [data,setData] = useState(loginData);

   const onChangeHandler = (input , value)=>{
      setData((prev)=>{
         return{
            ...prev,
            [input]:value
         }
      })
   }

   const submitHandler = (e)=>{
      e.preventDefault();
      setData(loginData)
      axios.post("https://prep-clone.onrender.com/api/login" , data)
      .then(res=>{
         if(res.data.token){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("login",true)
            localStorage.setItem("user",res.data.user.name)
            navi('/')
         }
         console.log(res.data);
      })
      .catch(err=>console.log(err))
   }
  return (
     <>
    <Wrapper>
         <Common/>
        <div className='loginForm'>

         <div className='flex links'>
               <NavLink to='/login'><div className='link link1'> Login</div></NavLink>
               <NavLink to='/register'><div className='link link2'> Sign Up</div></NavLink>
               
         </div>

         <div className='heading'>Sign in to your account</div>

         <form className='flex flex-column'>
            <div className='input-form'>
            <input type='email' placeholder=' ' onChange={(e)=>onChangeHandler('email',e.target.value)} value={data["email"]} autoComplete='off'  />
            <span>Email</span>
            </div>

            <div className='input-form'>
            <input type='password' placeholder=' ' onChange={(e)=>onChangeHandler('password',e.target.value)} value={data["password"]} autoComplete='off'  />
            <span>Password</span>
            </div>

            <div className='forgetpassword'>Forget your password?</div>
            <Button onClick={submitHandler}>Login</Button>
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
   .loginForm{
    width:30vw;
    
    background-color:white;
    border-radius:1rem;
    padding:4rem;
    text-align:center;
   }

   .heading{
      font-size:2.5rem;
      color:#7D7C7C;
      margin:2rem 0;
      
   }
   .forgetpassword{
      color:#6499E9;
      font-size:2rem;
      text-align:left;
      margin:2rem 0 ;
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
         font-size:2.8rem;
         width:24vw;
         border: transparent;
         background-color: transparent;
         border-bottom: 2px solid lightgray;
         margin:2.5rem 0;
        
      }
      
      input:focus{
         outline:none;
         border-bottom: 2px solid #192655;
         
         
      }
      input:hover{
         
         border-bottom: 3px solid black;
      }
      input:focus ~ span , input:not(:placeholder-shown) + span{
         font-size: 2rem;
         top: -.2rem;
          color:#192655 ;
          transition: 0.5s;
      }
      .input-form{
         position:relative;
      }
      span{
         font-size:2rem;
         position:absolute;
         left:.8rem;
         top:3rem;
      }

      button{
         width:100%;
         background-color:#3876BF;
         border:2px solid #3876BF;
         padding:1rem 2rem;
      }
   }
`

export default Login
