import React, { useState } from 'react'
import styled from 'styled-components'
import DropDown from './DropDown'
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [togle, setatogle]=useState(false)
    const [togle2, setatogle2]=useState(false)
    const [togle3, setatogle3]=useState(false)
  return (
    <Wrapper>
        <ul className='flex'>
            <li onMouseEnter={()=>setatogle(true) } onMouseLeave={()=>setatogle(false)}><span>Study Material</span> <IoMdArrowDropdown /> <DropDown item={["Mock Tests","Video Tutorial"]} nav ={["mock-test","video-tutorial"]} togle={togle}/></li>
            <li onMouseEnter={()=>setatogle2(true) } onMouseLeave={()=>setatogle2(false)}><span>Courses and Programs</span> <IoMdArrowDropdown /><DropDown item={["Master Competitive Programming","Full Stack Program"]} nav ={["master-competitive-programming","full-stack-program"]} togle={togle2}/></li>
            <li><NavLink to='/elevation-academy'><span>Elevation Academy</span></NavLink></li>
            <li className='project' onMouseEnter={()=>setatogle3(true) } onMouseLeave={()=>setatogle3(false)}><span>Project</span> <IoMdArrowDropdown /><DropDown  item={["html","Css","Javascript","React Js","Node Js","MongoDB"]} nav={["html","css","javascript","reactjs","nodejs","mongodb"]} togle={togle3}/></li>
            <li><NavLink to='/login'><button>Login</button></NavLink></li>
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
   
    
`

export default Navbar
