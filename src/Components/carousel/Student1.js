import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ContextProvider } from '../Context/ContextApi';

const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Student1 = () => {

    const {other,isLoading} =ContextProvider()
    if (isLoading) {
        return <div className="loading">Loading.....</div>;
      }
  return (
    <Wrapper>
        <h1>This Might Be You !</h1>
        <Carousel responsive={responsive} infinite={true}>
               {
                other.filter(item=>item.type==="student").slice(6,10).map((item,index)=>{
                    return(
                        <div className='flex flex-column student' key={index}>
                    <div className='flex'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp' alt='comma'/>
                        <h2>{item.name}</h2>
                    </div>
                    <p>{item.description}</p>
                    <img className='hired' src={item.profile} alt='shivani'/>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp' alt='coma2'/>
                </div>
                    )
                })
               }

                
</Carousel>;
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width:130rem;
    margin: 0 auto;
    h1{
        text-align:center;
        font-size:3rem;
        font-weight:bold;
        margin:4rem 0 5rem; 
    }
    h2{
        font-size:2rem;
        font-weight:light;
        
    }
    p{
        
        font-size:1.4rem;
        color:gray;
        padding:0 3rem;
        line-height:2.3rem;
    }

    .student{
        width:40rem;
        padding:4rem 5rem;
        margin:0 5rem;
        div{
            align-items:center;
        }
        .hired{
            margin:2rem auto;
            width:6rem;
        }
    }

    .react-multiple-carousel__arrow--left {
        background-color:#0398d3;
        border:2px solid #0398d3;
        
       
    }
    .react-multiple-carousel__arrow--right {
        background-color:#0398d3;
        border:2px solid #0398d3;
        right:-.1rem;
       
    }
    .react-multiple-carousel__arrow:hover{
        background-color:#0398d3;
    }


`
export default Student1
