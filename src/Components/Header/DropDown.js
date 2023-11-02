import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DropDown = ({togle , item ,nav}) => {
  return (
    <Wrapper >
       {togle
       ? <ul className='flex flex-column'>
       {item.map((item , index)=>{
        return <NavLink  key={index} to={`/${nav[index]}` }><li >{item}</li></NavLink>
       })}
   </ul>
   :""}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width:32rem;
    border-radius:1rem;
    position:absolute;
    top:2rem;
    box-shadow:0px 1px 10px 0px #D0D4CA;
    padding:0 1rem;
    background-color:white;
    li{
        margin: 2rem 0;
    }
    li:hover{
        color:#3A98B9;
    }
   
`
export default DropDown
