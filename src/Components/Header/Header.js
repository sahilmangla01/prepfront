import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper className='flex'>
     <NavLink to='/'> <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='title'/></NavLink>
      <Navbar/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100vw;
    justify-content:space-around;
    background-color:white;
    align-items:center;
    box-shadow:0px 1px 10px 0px #D0D4CA;
    position:sticky;
    top:0;
    z-index:9999;
    img{
        width:17rem;
    }
`

export default Header
