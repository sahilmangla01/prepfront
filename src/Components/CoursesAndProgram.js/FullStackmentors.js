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

@media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    .mentors{
        justify-content:space-between;
    }
    .mentor-info{
        width:45%;
        height:35vh;
        margin:5rem auto;
        text-align:center;
        p{
            font-size:2.5rem;
            margin:5rem 0 0rem;
        }
        .description{
            font-size:2rem;
            margin-top:2rem;
        }
        img{
            left:50%;
            transform:translateX(-50%);
        }
    }
   
}

@media only screen and (max-width:${({theme})=>theme.media.mobile}){
    padding:5rem 2rem;
    h1{
        font-size:3rem;
        text-align:center;

    }
    .mentor-info{
        width:100%;
        margin:5rem auto;
        height:70vh;
        text-align:center;
        p{
            font-size:3rem;
            margin:5rem 0 0rem;
        }
        .description{
            font-size:2rem;
            margin-top:4rem;
        }
        img{
            left:50%;
            transform:translateX(-50%);
        }
    }
}


`

export default FullStackmentors
