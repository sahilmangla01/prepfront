import React, {  useState } from 'react'
import styled from 'styled-components'
import DropDown from './DropDown'
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [togle, setatogle]=useState(false)
    const [togle2, setatogle2]=useState(false)
    const [togle3, setatogle3]=useState(false)
    const [dash, setDash]=useState(false)
    const navi = useNavigate()
    let log = localStorage.getItem("login");
    let name = localStorage.getItem("user");

    const dashclickHandle= ()=>{
        navi('/dashboard') 
        setDash(false)
    }
    const logout =()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        localStorage.removeItem("user")
        navi('/')
    }   
   
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
            <li>
                {
                    log?
                    <div  className='navname'>
                        <p onClick={()=>setDash(!dash)}><span>{name[0]}</span>{name.split(" ",1)}</p>
                        {
                        dash? <div className='dashboard'>
                        <div className='flex'>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt='dash'/>
                            <p onClick={dashclickHandle}>My Dashboard</p>
                        </div>
                        
                        <div onClick={logout} className='logout'>Logout</div>
                    </div>
                    :""
                       }
                        </div>
                    :""
                }    
            </li>
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
        position:relative;
        align-items:center;
        span{
            color:white;
            background-color:#0398d3;
            padding:0.8rem 1.1rem;
            border-radius:50%;
            font-size:2rem;
            margin-right:1rem;


        }
        p{
            color:#0398d3;
        }
    }
    .dashboard{
        position:absolute;
        top:5.2rem;
        left:-1rem;
        border-top: 2px solid gainsboro;
        padding: 1rem ;
        background-color:white; 
        .logout{
            color:orangered;
            font-size:1.7rem;
            padding:1.5rem 1.5rem;
            width:100%;
        }
        div{
            align-items:center;
            border-bottom: 2px solid gainsboro;
            padding:1rem 0;
            
            
            img{
                width:2vw;
                margin-right:1rem;
            }
            p{
                width:10vw;
                color:#0C356A;
            }
        }
    }
    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        display:none;
    }
    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        display:none;
    }
`

export default Navbar
