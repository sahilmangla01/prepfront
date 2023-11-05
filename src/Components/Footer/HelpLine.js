import React from 'react'
import styled from 'styled-components'

const HelpLine = () => {
  return (
    <Wrapper>
        Need Help? Talk to us on  079 6900 2111 or
        <span>  Request Callback</span>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    font-size:1.8rem;
    background-color:#0398d3;
    text-align:center;
    color:white;
    position:sticky;
    font-weight:bold;
    z-index:3;
    padding:0.5rem 0 ;
    bottom:0;
    span{
        text-decoration:underline;
    }
    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        display:none;
    }
`

export default HelpLine
