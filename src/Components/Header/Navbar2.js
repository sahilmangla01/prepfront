import React, { useState } from 'react'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    const [togle,setTogle]=useState(false)
    const navi = useNavigate()
    let log = localStorage.getItem("login");
    let name = localStorage.getItem("user");
    const logout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        localStorage.removeItem("user")
        setTogle(false)
        
    }
    const loginsignup=()=>{
        navi("/register");
        setTogle(false)
    }
    const dashboardclick=()=>{
        navi("/dashboard")
        setTogle(false)
    }
  return (
    <Wrapper>
        {!togle?<GiHamburgerMenu onClick={()=>setTogle(true)} className='hamburg'/>:<AiOutlineClose onClick={()=>setTogle(false)} className='hamburg'/>}
       {
        togle? <ul>
            {log?<li className='dashboard'><CgProfile className='profileicon'/> Hi {name.split(" ",1)}</li>:""}
           {log? <li > <div className='dashboard' onClick={dashboardclick}>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt='dash'/>
                            <p >My Dashboard</p>
                        </div></li>:""}
        <NavLink onClick={()=>setTogle(false)} to="/mock-test"><li>Mock Test</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/video-tutorial"><li>Video Tutorial</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/master-competitive-programming"><li>Master Competitive Programming</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/full-stack-program"><li>Full Stack program</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/elevation-academy"><li>Elevation Academy</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/html"><li>HTML</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/css"><li>CSS</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/javascript"><li>Javascript</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/reactjs"><li>React</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/nodejs"><li>Node Js</li></NavLink>
        <NavLink onClick={()=>setTogle(false)} to="/mongodb"><li>MongoDB</li></NavLink>
        <li className='logout'>{log?<p onClick={logout}>Logout</p>:<p onClick={loginsignup}>Login/Signup</p>}</li>
    </ul>:""
       }
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display:none;
    position:relative;
    margin-right:3rem;
    .hamburg{
        font-size:3rem;
        color:#0398d3;
    }
    ul{
        position:absolute;
        top: 4rem;
        left: -18rem;
    width: 60vw;
    height:70vh;
        overflow-y:scroll;
        overflow-x:hidden;
        background:white;
        border-radius:1rem;
        li{
            font-size:1.7rem;
            font-weight:100;
            color:gray;
            padding:0 1rem 0 0;
            margin:1.5rem 2rem;
            width:100%;
        }
    }
    .dashboard{
        color:#0C356A;
        font-size:2rem;
        border-bottom:1px solid gainsboro;
        padding:1rem 0;
        display:flex;
        align-items:center;
        .profileicon{
            font-size:2.5rem;
            margin-right:1rem;
        }
        img{
            width:8vw;
            margin-left:0;
            margin-right:1rem
        }
       
    }
    .logout{
        color:orangered;
        font-size:2.5rem;
    }
    
    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        display:block;
            
            
    }
    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        display:block;
        margin-right:6rem;
        ul{
            left:-39rem;
            li{
                font-size:2.5rem;
                font-weight:500;
                margin:2rem 3rem;;
            }
        }
        .dashboard{
            font-size:3rem;
            .profileicon{
                font-size:6rem;
            }
        }
    }
`

export default Navbar2
