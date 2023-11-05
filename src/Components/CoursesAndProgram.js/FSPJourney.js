import React, { useState } from 'react'
import styled from 'styled-components'

const FSPJourney = () => {
 const [value,setValue]= useState(0)
  


  
 
  return (
   <Wrapper>
        <h1>How will your journey look like?</h1>
        <p>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
        

       
       <div className='flex journey-box'>
        <div>
         
             
                <div onClick={()=>setValue(0)} className='journey flex flex-column'>
              <div className='id'><h1>1</h1></div>
              <div className={value===0?"name name2":"name"}>Batch Commencement</div>
              <ul>
                    <li>Get access to dashboard & complete plan</li>
                    <li>Access to recorded video lectures</li>
                    <li>One live session with mentors per week</li>
                    <li>Introduction with lead mentor for this program</li>
                    <li>Access to Mock Tests</li>
                    <li>Every live session will be of 2 hours duration</li>
             
              </ul>
            </div>
                <div onClick={()=>setValue(1)} className='journey flex flex-column'>
              <div className='id'><h1>2</h1></div>
              <div className={value===1?"name name2":"name"}>Learn required languages, framework & tools</div>
              <ul>
              <li>Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS</li>
              <li>Learn the industry wide used tools like MongoDB, Git & Jira</li>
              </ul>
            </div>

            <div onClick={()=>setValue(2)} className='journey flex flex-column'>
              <div className='id'><h1>3</h1></div>
              <div className={value===2?"name name2":"name"}>Complete awesome real world projects</div>
              <ul>
              <li>HTML Blog Page</li>
                    <li>Todo App</li>
                    <li>Chat App</li>
                    <li>Reminder Clock App</li>
                    <li>React Blog</li>
                    <li>E-commerce Web App</li>
              </ul>
            </div>

            <div onClick={()=>setValue(3)} className='journey flex flex-column'>
              <div className='id'><h1>4</h1></div>
              <div className={value===3?"name name2":"name"}>Experience the complete development lifecycle</div>
              <ul>
              <li>Learn the Agile Development Methodology</li>
              <li>Real time experience of complete software development lifecycle from development to deployment</li>
              </ul>
            </div>

            <div onClick={()=>setValue(4)} className='journey flex flex-column'>
              <div className='id'><h1>5</h1></div>
              <div className={value===4?"name name2":"name"}>Be a certified Full Stack Developer</div>
              <ul><li>Get certificate of course completion on completing projects, assignments & mock tests</li></ul>
            </div>

            
            
    
  </div>
        {value===0?<div className='flex flex-column journeyContent'>
                <h1>Batch Commencement</h1>
                <div className='journey-list'>
                  <div>
                    <p>Get access to dashboard & complete plan</p>
                    <p>Access to recorded video lectures</p>
                    <p>One live session with mentors per week</p>
                  </div>
                  <div>
                    <p>Introduction with lead mentor for this program</p>
                    <p>Access to Mock Tests</p>
                    <p>Every live session will be of 2 hours duration</p>
                  </div>
                </div>
                
                <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_getcertified.svg" alt="howitworks"/>
          </div>:""}


        {value===1?<div className='flex flex-column journeyContent'>
                <h1>Learn required languages, framework & tools</h1>
                <div className='journey-list'>
                  <div>
                    <p>Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS</p>
                   
                  </div>
                  <div>
                    <p>Learn the industry wide used tools like MongoDB, Git & Jira</p>
                    
                  </div>
                </div>
                
                <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_language-full+stack.svg" alt="howitworks"/>
          </div>:""}


        {value===2?<div className='flex flex-column journeyContent'>
                <h1>Complete awesome real world projects</h1>
                <div className='journey-list'>
                  <div>
                   
                    <p>HTML Blog Page</p>
                    <p>Todo App</p>
                    <p>Chat App</p>
                  </div>
                  <div>
                    <p>Reminder Clock App</p>
                    <p>React Blog</p>
                    <p>E-commerce Web App</p>
                    
                  </div>
                </div>
                <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_projects.svg" alt="howitworks"/>
          </div>:""}


        {value===3?<div className='flex flex-column journeyContent'>
                <h1>Experience the complete development lifecycle</h1>
                <div className='journey-list'>
                  <div>
                   
                    <p>Learn the Agile Development Methodology</p>
                    
                  </div>
                  <div>
                    <p>Real time experience of complete software development lifecycle from development to deployment</p>
                    
                    
                  </div>
                </div>
                <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_lifecycle.svg" alt="howitworks"/>
          </div>:""}


        {value===4?<div className='flex flex-column journeyContent'>
                <h1>Be a certified Full Stack Developer</h1>
                <div className='journey-list'>
                  <div>
                   
                    <p>Get certificate of course completion on completing projects, assignments & mock tests</p>
                    
                  </div>
                  
                </div>
                <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_getcertified.svg" alt="howitworks"/>
          </div>:""}
          
          
  </div>

   </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color:#F5F7F8;
  padding:5rem 0;
  text-align:center;
  

  h1{
    font-size:3rem;
    margin-bottom:3rem;
  }
  p{
    font-size:2rem;
    width:50vw;
    color:gray;
    margin:0 auto 5rem;
  }

  .journey{
    margin-left:20rem;
    position:relative;
    height:16vh;
    justify-content:space-between;
    ul{
      display:none;
    }
    .name{
      font-size:1.6rem;
      background: linear-gradient(45deg,rgba(48,35,174,.1),rgba(200,109,215,.1));
      font-weight:lighter;
      padding:2.5rem;
      width:25vw;
      border-radius:2rem;
      box-shadow: 0 10px 30px rgba(95,141,196,.2);
      
    }
    .name2{
      background: transparent linear-gradient(89deg,rgba(45,111,162,.8862745098039215),rgba(2,9,14,.9294117647058824)) ;
      color:white;
    }
    .id{
      border:3px solid orange;
      width:7rem;
      height:7rem;
      border-radius:50%;
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:-4rem;
      left:-4rem;
      h1{
        width:4rem;
      height:4rem;
        font-size:2.5rem;
        border-radius:50%;
        background-color:white;
        margin:auto;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      
    }
   
  }

  .journeyContent{
    padding:2rem 5rem;
    width:80rem;
    height:50vh;
    margin:auto;
    justify-content:center;
    align-items:center;
    border-left:2px solid gainsboro;

    
  }
  .journey-list{
    display:flex;
    justify-content:space-between;
    
    p{
      font-size:1.6rem;
      width:35rem;
      text-align:left;
      display:flex;
      align-items:center;
     
    }
    p::before{
      content:">";
      font-size:3rem;
      color:orange;
      margin-right:1rem;

    }
  }

  @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    h1{
      font-size:4rem;
    }
    p{
      font-size:2.5rem;
      width:70%;
    }
    .journey-box{
      div{
        width:100vw;
        .journey{
          width:80%;
          height:auto;
          margin:1rem auto 3.5rem;
          ul{
            display:block;
             text-align:left;
            li{
              display:flex;
            align-items:center;
              font-size:2rem;
              margin:2rem ;
              color:gray;
            }
            li::before{
              margin-right:2rem ;
              content:">";
              font-size:3rem;
              color:orange;
            }
          }
          .name{
            width:100%;
            font-size:2rem;
            padding:3rem;
          }
          .name2{
            background: linear-gradient(45deg,rgba(48,35,174,.1),rgba(200,109,215,.1));
            color:black;
          }
        }
        
      }
    }
    
    .journeyContent{
      display:none;
    }
  }

  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    h1{
      font-size:3rem;
      width:80vw;
      margin:0 auto;
    }
    p{
      width:70vw;
      margin:2rem auto;
    }
    .journey-box{
      margin:4rem 0;
      div{
        width:90vw;
        margin:0 auto;
        .journey{
          width:80%;
          height:auto;
          margin:1rem auto 3rem;
          ul{
            display:block;
            text-align:left;
            li{
              display:flex;
            align-items:center;
              font-size:2rem;
              margin:1.5rem 2rem ;
              color:gray;
            }
            li::before{
              margin-right:2rem ;
              content:">";
              font-size:3rem;
              color:orange;
            }
          }
          .name{
            width:100%;
            font-size:2rem;
            padding:3rem;
          }
          .name2{
            background: linear-gradient(45deg,rgba(48,35,174,.1),rgba(200,109,215,.1));
            color:black;
          }

        }
      }
    }
    .journeyContent{
      display:none;
    }
  }
`
export default FSPJourney


