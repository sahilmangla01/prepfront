import React from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import { ContextProvider } from '../Context/ContextApi';

const Project = () => {
    const id =useParams().id
   
    const {project ,isLoading}= ContextProvider();


   
    if (isLoading) {
      return <div className="loading">Loading.....</div>;
    }
  return (
    <Wrapper>
      <div className='container flex projects'>
        <div className='flex flex-column'>
          {
            project.filter(item=>item.type===`${id}`).map((item,index)=>{
              return (
                <div className='flex flex-column project' key={index}>
                  <img src={item.img} alt={item.name}/>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  

                </div>
                
              )
            })
          }
        </div>
        <div className='Topics'>
          <h1>Topics</h1>
          {
             project.filter(item=>item.type===`${id}`).slice(0,1).map((item,index)=>{
              return(
                <ul key={index}>
                    {item.topic.map((e,index)=>{
                      return <li key={index}>{e}</li>
                    })}
                </ul>
              )
            })
          }
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
.projects{
  justify-content:space-around;
}
  .project{
    padding: 5rem 10rem;
    img{
      width:45vw;
      height:60vh;
      margin-bottom:3rem;
      
    }
    h1{
      font-size:3rem;
      margin:0 auto;
      text-transform:uppercase;
      
    }
    p{
      width:40vw;
      
      font-size:2rem;
      color:gray;
      text-align:justify;
      margin:3rem auto;
      line-height:3rem;
      
    }
  }

  .Topics{
    margin:4rem 0;
    h1{
      font-size:2.5rem;
      font-weight:bold;
      margin:2rem auto;
      
    }
  }
  ul{
    li{
      width:20vw;
      font-size:1.5rem;
      padding:2rem 3rem 2rem 2rem;
      border-radius:1rem;
      box-shadow: 0px 1px 6px rgba(162,161,161,.1607843137);
    }
  }


`

export default Project
