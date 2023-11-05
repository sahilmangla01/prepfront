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

const Testimonials = ({start,end,infinite}) => {
    const{isLoading,other}=ContextProvider()

    if (isLoading) {
        return <div className="loading">Loading.....</div>;
      }
  return (
    <Wrapper>
        <div className='container'>
        <p>Testimonials</p>
        <h1>Our Students Speaks</h1>
       <Carousel infinite={infinite}  responsive={responsive}>
            {
                other.filter(item=>item.type==="student").slice(start,end).map((item,index)=>{
                    return(
                        <div key={index} className='testimonials'>
                            <div className='flex'>
                                <img src={item.profile} alt={item.name}/>
                                <div className='flex flex-column'>
                                    <h2>{item.name}</h2>
                                    <p>{item.company}</p>
                                </div>
                            </div>
                            <p className='description'>{item.description}</p>
                        </div>
                    )
                })
            }
        </Carousel>
       
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align:center;
.container{
    margin:9rem auto;
}


h1{
font-size:3rem;
font-weight:bold;
color:#45474B;
margin:2rem 0 5rem;
}
p{
    font-size:1.8rem;
  color:gray;
}
.testimonials{
    margin:1rem;
    padding:5rem 2rem;
    width:24vw;
    height:auto;
    border-radius:2rem;
    text-align:justify;
    box-shadow: 0 10px 30px rgba(95,141,196,.2);
    .description{
        overflow-y:scroll;
        min-height:25vh;
    }
    img{
        margin: 0 1rem 2rem 0;
    }
    ::-webkit-scrollbar {
        width: 0px;
      }
      
}
.react-multi-carousel-track {
    margin-bottom:6rem;
}
.react-multiple-carousel__arrow--left {
    left:105rem;
    bottom:1rem;   
}
.react-multiple-carousel__arrow--right {
    bottom:1rem;   
}
.react-multiple-carousel__arrow{
    background:white;

}
.react-multiple-carousel__arrow--left::before{
    color:#4b8ce8;
    font-size: 4rem;
    font-weight: bold;
}
.react-multiple-carousel__arrow--right::before{
    color:#4b8ce8;
    font-size: 4rem;
    font-weight: bold;
}
@media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    .testimonials{
        width:40vw;
        height:40vh;
        margin-bottom:4rem;
        .description{
            font-size:2rem;
            margin:2rem 0;
            height:20vh;
        padding-bottom:2rem;
        }
    }
    .react-multiple-carousel__arrow--left {
        left:70vw;  
    }
    p{
        font-size:2.5rem;
    }
    h1{
        font-size:4rem;
    }
    h2{
        font-size:3rem;
    }
}

@media only screen and (max-width:${({theme})=>theme.media.mobile}){
    .testimonials{
        width:100%;
    }
}

`
export default Testimonials
