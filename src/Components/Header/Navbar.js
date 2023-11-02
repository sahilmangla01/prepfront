import React, {  useState } from 'react'
import styled from 'styled-components'
import DropDown from './DropDown'
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [togle, setatogle]=useState(false)
    const [togle2, setatogle2]=useState(false)
    const [togle3, setatogle3]=useState(false)

    let log = localStorage.getItem("login");
    let name = localStorage.getItem("user");
   
  return (
    <Wrapper>
            {
                !log?<div className='buttons'>
                <NavLink to='/login'><button className='btn1'>Login</button></NavLink>
                <NavLink to='/register'><button className='btn2'>Sign up</button></NavLink>
                </div>:""
            }

        <ul className='flex navbar'>
            <li onMouseEnter={()=>setatogle(true) } onMouseLeave={()=>setatogle(false)}><span>Study Material</span> <IoMdArrowDropdown /> <DropDown item={["Mock Tests","Video Tutorial"]} nav ={["mock-test","video-tutorial"]} togle={togle}/></li>
            <li onMouseEnter={()=>setatogle2(true) } onMouseLeave={()=>setatogle2(false)}><span>Courses and Programs</span> <IoMdArrowDropdown /><DropDown item={["Master Competitive Programming","Full Stack Program"]} nav ={["master-competitive-programming","full-stack-program"]} togle={togle2}/></li>
            <li><NavLink to='/elevation-academy'><span>Elevation Academy</span></NavLink></li>
            <li className='project' onMouseEnter={()=>setatogle3(true) } onMouseLeave={()=>setatogle3(false)}><span>Project</span> <IoMdArrowDropdown /><DropDown  item={["html","Css","Javascript","React Js","Node Js","MongoDB"]} nav={["html","css","javascript","reactjs","nodejs","mongodb"]} togle={togle3}/></li>
            <li><NavLink to='/login'>
                {
                    log?<div className='navname'><span>{name[0]}</span><p>{name.split(" ",1)}</p></div>:""
                }    
            </NavLink></li>
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    ul{
        width:50vw;
        justify-content:space-between;
    }
    span{
        color:#7D7C7C;
    }
   span:hover{
    color:black;
   }
   .navbar{
    align-items:center;
   }
    li{
        text-transform:uppercase;
        font-size:1.5rem;
        color:#7D7C7C;
        font-width:800;
        position:relative;

        button{
            font-size:1.5rem;
            padding:.2rem 1.5rem;
            color:#FF4B91;
            border:2px solid #FF4B91;
            border-radius:1rem;
            background-color:white;
        }
        button:hover{
            color:white;
            background-color:#FF4B91;
        }
    }
    
    .project section{
        left:-25rem;
    }
   
    .btn1{
        font-size:1.5rem;
            padding:.2rem 1.5rem;
            color:#FF4B91;
            border:2px solid #FF4B91;
            border-radius:1rem;
            background-color:white;
    }
    .btn2{
        font-size:1.5rem;
            padding:.2rem 1.5rem;
            margin-left:1.5rem;
            color:white;
            background-color:#FF4B91;
            border:2px solid #FF4B91;
            border-radius:1rem;
    }
    .buttons{
        display:flex;
        justify-content:end;
        padding:1rem;
        padding-right:5rem;
    }
    
    .navname{
        display:flex;
        align-items:center;
        span{
            color:white;
            background-color:#0398d3;
            padding:0.8rem 1.1rem;
            border-radius:50%;
            font-size:2rem;


        }
        p{
            color:gray;
            margin-left:1rem;
        }
    }
`

export default Navbar
