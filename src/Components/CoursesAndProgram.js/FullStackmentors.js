import React from 'react'
import styled from 'styled-components'
import { ContextProvider } from '../Context/ContextApi'

const FullStackmentors = () => {
    const {isLoading,other}=ContextProvider()

    if (isLoading) {
        return <div className="loading">Loading.....</div>;
      }
  return (
    <Wrapper>
        <h1>Metors & Instructors</h1>
        <div className='mentors'>
            {
                other.filter(item=>item.type === "mentor").slice(3,6).map((item,index)=>{
                    return(
                        <div key={index} className='mentor-info'>
                            <img src={item.profile} alt={item.name}/>
                            <p>{item.name}{item.company}</p>
                            <p className='description'>{item.description}</p>
                        </div>
                    )
                })
            }

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: transparent linear-gradient(89deg,rgba(45,111,162,.8862745098039215),rgba(2,9,14,.9294117647058824)) 0 0 no-repeat padding-box;
padding:5rem ;
h1{
    font-size:4rem;
    text-align:center;
    color:white;
    margin:2rem 0 10rem;
}

.mentors{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
}
.mentor-info{
    width:20vw;
    height:55vh;
    padding:3rem;
    margin: 0 2rem;
    background-color:white;
    border-radius:1rem;
    border-bottom:thick solid orange;
    position:relative;
    

    p{
        font-size:2rem;
        margin:5rem 0;
        color:rgba(10,45,71,.9294117647058824);
        
    }
    .description{
        font-size:1.5rem;
        color:rgba(106,127,134,.9294117647058824);
    }
    img{
        width:12rem;
        border-radius:50%;
        position:absolute;
        top:-6rem;
        left:10rem;
    }
}


`

export default FullStackmentors
