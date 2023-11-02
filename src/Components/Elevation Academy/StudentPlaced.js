import React from 'react'
import styled from 'styled-components'

const StudentPlaced = () => {
  return (
    <Wrapper>
        <h1>Where our Students are placed</h1>
        <p>"You guarantee hard work, We</p>
        <p>guarantee placements"</p>

        <div className='placed'>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg' alt='company'/></div>
            <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg' alt='company'/></div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align:center;
margin:9rem auto;
width:120rem;


h1{
font-size:3rem;
font-weight:bold;
color:#45474B;
margin:2rem 0;
}
p{
    font-size:2rem;
  color:gray;
}
.placed{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin:5rem 0;
div{
    box-shadow: 0 10px 35px rgba(4,4,4,.0784313725490196);
    border-radius: 6px;
    margin:2rem;
    width:25rem;
}

}

`

export default StudentPlaced
