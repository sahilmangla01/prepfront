import React from 'react'
import styled from 'styled-components'

const MCPwithus = () => {
  return (
    <Wrapper>
        <p className='heading'>Master Competitive Programming With Us</p>


        <div className='flex'>

        <ul className='left'>
                <li className='flex '>
                    <div>
                    <h2>Personalised Program</h2>
                    <p>Master your skills from where you are, with India's only personalised program</p>
                    </div>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='expertMentors'/></div>
                </li>
                <li className='flex '>
                    <div>
                    <h2>Quick Doubt Support</h2>
                    <p>Get your doubts cleared by coding experts and have a smooth learning</p>
                    </div>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp' alt='expertMentors'/></div>
                </li>
                <li className='flex '>
                    <div>
                    <h2>250+ Coding Questions</h2>
                    <p>Best way to master a language is by coding in the language</p>
                    </div>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_250+Coding+Questions.webp' alt='expertMentors'/></div>
                </li>
                <li className='flex '>
                    <div>
                    <h2>50+ Hours of Videos</h2>
                    <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                    </div>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp' alt='expertMentors'/></div>
                </li>
            </ul>
            <div className='mainImage'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg' alt='coursePageNew'/> 
            </div>

            <ul className='right'>
                <li className='flex '>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Expert+Mentors.webp' alt='expertMentors'/></div>
                    <div>
                    <h2>Expert Mentors</h2>
                    <p>Get career guidance, mentorship, time management strategies from industry experts</p>
                    </div>
                </li>
                <li className='flex '>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Get+certificate-01.webp' alt='expertMentors'/></div>
                    <div>
                    <h2>Get Certified</h2>
                    <p>Get recognized on course completion with highly reputed PrepBytes certificates</p>
                    </div>
                </li>
                <li className='flex '>
                <div className='image'> <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_20+Live+Coding+Sessions.webp' alt='expertMentors'/></div>
                    <div>
                    <h2>20+ Live Coding Sessions</h2>
                    <p>Code live and get mentorship with the top-rated coders of the country.</p>
                    </div>
                </li>
                <li className='flex '>
                    <div className='image'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Tech-Apti+MCQ+Tests.webp' alt='expertMentors'/></div>
                    <div>
                    <h2>40+ Coding quizes</h2>
                    <p>Small quizzes after every topic to give you a quick check on your understandings</p>
                    </div>
                </li>
            </ul>

        </div>

        <hr/>
        <div className='stats'>
            <div>
                <h1>10K+</h1>
                <p>Students Enrolled</p>
            </div>
            <div>
                <h1>1000K+</h1>
                <p>Doubts Solved</p>
            </div>
            <div>
                <h1>2K+ hrs</h1>
                <p>Mentor Interaction</p>
            </div>
        </div>
        <hr/>

        <p className='heading'>Crack Reputed Coding Contests</p>
        <img className='companyimg' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp' alt='mcpcompany'/>
        <p className="heading">Curriculum</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`


.heading{
    font-size:3rem;
    font-weight:500;
    padding:0;
    margin:8rem 0 5rem;
  }
  div{
    justify-content:center;
    position:relative;
   

    .left{
      text-align:right;
      position:absolute;
      left:0px;
      top:1.5rem;
      z-index:1;
    }
    .right{
        
        position:absolute;
        right:0px;
        top:1.5rem;
      text-align:left;
    }
  }


  ul{
    
    li{
        padding:2rem 0;
       div{
        margin:0 2rem;
       }
       .image{
           box-shadow: 0px 1px 6px gray;
           width:6rem;
           border-radius:50%;
           background-color:white;
          

       }
        img{
           padding:1rem; 
           
           
        }
        p{
            font-size:1.4rem;
            color:gray;
            width:30rem;
            line-height:2rem;
        }

    }
  }

  .mainImage{
    background-color:#F5F7F8;
    padding:4rem 4.5rem 3rem;
    margin-bottom:8rem;
    
    img{
        margin-top:6rem;
    }
  }

  .stats{
    display:flex;
    justify-content:space-around;
    padding:6rem;

    h1{
        font-size:4.5rem;
        color:#0398d3;
        margin-bottom:1.5rem;
    }
    p{
        font-size:2rem;
        
    }
  }
  .companyimg{
    width:70vw;
  }

  @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    div{
        .left{
            left:-5vw;
        }
        .right{
            right:-5vw;
        }
    }
    ul{
        li{
            padding:1rem;
            width:80%;
            div{
                margin:0 0.5rem;
            }
            p{
                width:20rem;
            }
            .image{
                width:7rem;
            }
            img{
                padding:2rem 1.5rem;
            }
        }
    }

    .stats{
        padding: 6rem 0;
        justify-content:space-between;
    }
    .heading{
        font-size:3.4rem;
    }
    .companyimg{
        width:90vw;
        margin:auto;
    }
  }

  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    .heading{
        margin:4rem 0;
        font-weight:bold;
    }
    .mainImage{
        display:none;
    }
    div{
        flex-direction:column;
        
        .left,.right{
            position:static;
            text-align:left;
        }
        .left{
            li{
                flex-direction:row-reverse;
            }
        }
    }
    ul{
        li{
            padding:1rem 0;
            div{
                width:80%;
            }
            .image{
                
                box-shadow:none;
            }
            img{
                padding:2rem 1.5rem;
            }
            p{
                width:100%;
                margin:3px 0;
            }
        }
    }
    .stats{
        padding: 3rem 6rem;
        div{
            margin-bottom:4rem;  
        }
        h1{
            font-weight:bold;
            margin-bottom:1rem;
        }
    }
    .companyimg{
        width:100%;
    }
  }

`

export default MCPwithus
