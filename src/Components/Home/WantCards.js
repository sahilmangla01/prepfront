import React from 'react'
import styled from 'styled-components'
import {FaArrowRight}  from "react-icons/fa";

const WantCards = () => {
  return (
    <Wrapper>
        <div className="container"><h1 className='text'>I want to</h1>
        <div className='flex CARDS'>
            <div className='want-cards'>
                
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp' alt='mock'/>
                <div className='wantText card2'>Practice with mock test</div>
                <button className='icons'><FaArrowRight /></button>
            </div>
            <div className='want-cards'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp' alt='mock'/>
                <div className='wantText card4'>Master competitive programming</div>
                <button className='icons'><FaArrowRight /></button>
            </div>
            <div className='want-cards'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp' alt='mock'/>
                <div className='wantText card3'>Video Turorials for Preparation</div>
                <button className='icons'><FaArrowRight /></button>
            </div>
        </div>
</div>
    </Wrapper>
  )
}

const  Wrapper = styled.section`
    margin:4rem 0;
    text-align:center;
    .flex{
       
        justify-content:space-evenly;
    }

    .want-cards{
        width:20vw;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        box-shadow:0 4px 10px 0 #D0D4CA; 
        border-radius:1rem;
        margin:2rem 0;
        position:relative;
        img{
          
            width:30rem;
        }
        
        .wantText{
            margin:2.5rem 0;
            font-size:2rem;
            font-weight:bold;
            width:18rem;
            text-align:left;
            text-transform:uppercase;
            
        }
        .icons{
            width:5rem;
            height:5rem;
            background-color:white;
            border-radius:50%;
            font-size:2.4rem;
            color:#19A7CE;
            border:2px solid white;
            position:absolute;
            bottom:-2.9rem;
            box-shadow:0 4px 10px 0 #D0D4CA; 
        }
    }
    .want-cards:hover{
        box-shadow:0 4px 20px 0 gray; 

    }
    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        .CARDS{
            width:90vw;
            flex-wrap:wrap;
        }
        .want-cards{
            width:40vw;
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        .CARDS{
            width:90vw;
            flex-wrap:wrap;
        }
        .want-cards{
            width:80vw;
        }
    }
    

`

export default WantCards
