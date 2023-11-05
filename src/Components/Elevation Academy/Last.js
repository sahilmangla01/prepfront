import React, { useState } from 'react'
import styled from 'styled-components'
import {BsPlus} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"

const Last = ({set}) => {
    const [val,setVal]=useState(0)
    const [val2,setVal2]=useState(0)
  return (

    <Wrapper>

        <div className='testdetails '>
            <div className='test-left'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp' alt='testimg'/>
            </div>
            <div className='test-right'>
                <h1>Free Webinar</h1>
                <p>Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                <div className='date'>17th April</div>
                <button onClick={()=>set(true)}>Register</button>
            </div>

        </div>
        <div className='metrics'>
            <div className='metrics-content'>
                <img alt='metrics' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg'/>
                <div>
                    <h2>100k+</h2>
                    <p>Student Coding Community</p>
                </div>
            </div>
            <div className='metrics-content'>
                <img alt='metrics' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg'/>
                <div>
                    <h2>800+</h2>
                    <p>Colleges</p>
                </div>
            </div>
            <div className='metrics-content'>
                <img alt='metrics' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg'/>
                <div>
                    <h2>100k+</h2>
                    <p>Students Placed</p>
                </div>
            </div>

        </div>

        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='faq-type'>
                <div onClick={()=>setVal(0)} className={val===0?'options color':'options'}>Eligibility Criteria</div>
                <div onClick={()=>setVal(1)} className={val===1?'options color':'options'}>Batch Enrollment</div>
                <div onClick={()=>setVal(2)} className={val===2?'options color':'options'}>Placement Support</div>
            </div>

            <div className='questions'>
                {
                    val===0?<div className='question-content'>
                    <div  className='question-options'>
                       <div>
                       <p>Can I apply if I am still in college</p>
                        {val2===1?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(1)} className='icon'/>}
                       </div>
                    {val2===1?<p className='answer'>Current batch is focussed on 2022, 2021 and 2020 passouts.</p>:""}
                    </div>

                    <div className='question-options'>
                       <div>
                       <p>Can I apply if I am from non cse branch?</p>
                        {val2===2?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(2)} className='icon'/>}
                       </div>
                    {val2===2?<p className='answer'>Yes, if you are willing to work hard on your coding skills, you can apply.</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>Do I need to have strong coding skills?</p>
                       {val2===3?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(3)} className='icon'/>}
                       </div>
                    {val2===3?<p className='answer'>No, you do not need to have strong coding skills. You just need to have good fundamentals and willingness to work hard.</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>How can I apply?</p>
                       {val2===4?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(4)} className='icon'/>}
                       </div>
                    {val2===4?<p className='answer'>Click on apply button on the top banner and fill the complete application form.</p>:""}
                    </div>
                </div>:""
                }

                {
                    val===1?<div className='question-content'>
                    <div className='question-options'>
                       <div>
                       <p>What is the process of enroling in the batch?</p>
                       {val2===1?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(1)} className='icon'/>}
                       </div>
                    {val2===1?<p className='answer'>You need to fill the application form and wait for our team to get in touch with you.</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>Classes will be Live or Recorded?</p>
                       {val2===2?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(2)} className='icon'/>}
                       </div>
                    {val2===2?<p className='answer'>Classes will be completely Live.</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>What will be the class timings?</p>
                       {val2===3?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(3)} className='icon'/>}
                       </div>
                    {val2===3?<p className='answer'>Classes generally happen post 6 pm, Monday to Friday.</p>:""}
                    </div>
                    
                </div>:""
                }

                {
                    val===2?<div className='question-content'>
                    <div className='question-options'>
                       <div>
                       <p>When will I get placement support?</p>
                       {val2===1?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(1)} className='icon'/>}
                       </div>
                    {val2===1?<p className='answer'>You will get placement support after you have completed the program and have finished all projects</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>How exactly is placement support provided?</p>
                       {val2===2?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(2)} className='icon'/>}
                       </div>
                    {val2===2?<p className='answer'>Post course completion , your resume will be shared by the partner companies and after your resume is shortlised you will get interview oppurtunity</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>For how long will I get placement support?</p>
                       {val2===3?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(3)} className='icon'/>}
                       </div>
                    {val2===3?<p className='answer'>You will get placement support for 12 months post course completion</p>:""}
                    </div>
                    <div className='question-options'>
                       <div>
                       <p>What if my resume is not getting shortlisted?</p>
                       {val2===4?<BiMinus onClick={()=>setVal2(0)} className='icon'/>:<BsPlus onClick={()=>setVal2(4)} className='icon'/>}
                       </div>
                    {val2===4?<p className='answer'>We have crafted the program very carefully , keeping in mind what recruiters look for in a candidate and their resume so there is a high probablity of resume getting shortlited. In worse case, if resume does not get shortlisted, we will work together on your resume and ensure it gets shortlisted</p>:""}
                    </div>
                </div>:""
                }
            </div>  
         </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

    width:130rem;
    margin: 0 auto;
    h1{
        color: #424242;
        font-weight: 600;
        font-size: 3.5rem;
        margin-bottom: 8px;
    }

    .testdetails{
        background: #fdf0d7;
        display:flex;
    }
    .test-left{
        padding: 4rem 0;
        img{
            padding:2rem 8rem;
        }
    }
    .test-right{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:80%;

       
        p{
            color: #858585;
            margin-bottom: 15px;
            font-size:2rem;
            width:50rem;
        }
        
    }
    .date{
        font-size:4rem;
        color:white;
        background: #f78077;
        padding:1.5rem 0;
        margin-bottom:1.5rem;
    }
    button{
        color:white;
        background:#0398d3;
        padding:1rem 5rem;
        font-size:2rem;
        border:2px solid #0398d3;
        border-radius:1rem;
        width:30%;
    }
    .metrics{
        background: #f78077;
        display:flex;
        justify-content:space-around;
        padding:4rem;

        .metrics-content{
            display:flex;
            img{
                width:5rem;
                margin-right:1rem;
            }
            h2{
                color:white;
                font-size:2.5rem;

            }
            p{
                color:white;
                font-size: 1.5rem;
            }
        }
    }

    .faq{
        margin-top:5rem;
        h1{
            text-align:center;
        }
    }
    .faq-type{
        display:flex;
        justify-content:center;
        margin-top:2rem;
        .options{
            padding: 2.5rem;
            margin:2rem;
            font-size:1.7rem;
            background-color:#f5f1ff;
        }
        .color{
            background-color: rgb(32, 142, 189);
            color:white;
        }
    }
    .questions{
        margin:5rem;
        .question-content{
            box-shadow: 0 4px 4px rgba(0,0,0,.10196078431372549);
            border-radius: 0.8rem;
            padding: 2rem 4rem;
            
           
        }
        .question-options{
            border-bottom: 1px solid rgba(0,0,0,.10196078431372549);
            text-align-left;

            .answer{
                font-size:1.5rem;
                padding:0rem 3rem 2rem 2rem;
                color:gray;
            }
            div{
                display:flex;
                padding:2rem;
                justify-content:space-between;
                align-items:center;
                p{
                    font-size:2rem;
                }
                .icon{
                    font-size:3rem;
                }
                
            }
            div:hover{
                color:rgb(32, 142, 189);    
            }
        }

    }
    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        width:100vw;
        margin:0 auto;
        .testdetails{
            flex-direction:column;
            text-align:center;
        }
        .test-right{
            width:100vw;
            p{
                margin:2rem auto;
            }
        }
        .test-left{
            margin:2rem  auto;
            img{
                width:80vw;
                marginleft:20%;
            }
        }
        button{
            margin:2rem auto;
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        width:100vw;
        margin:0 auto;
        .testdetails{
            flex-direction:column;
            text-align:center;
        }
        .test-right{
            width:100vw;
            p{
                width:80%;
                margin:2rem auto;
            }
        }
        .test-left{
            margin:2rem  auto;
            img{
                width:80vw;
                padding:0;
            }
        }
        button{
            width:50vw;
            margin:2rem auto;
        }
        .metrics{
            padding:4rem 0;
            flex-wrap:wrap;
            .metrics-content{
                margin:2rem ;
            }
        }
        .faq{
            width:100vw;
            h1{
                font-size:2.5rem;
            }

        }
        .faq-type{
            flex-direction:column;
            .options{
                width:70vw;
                text-align:center;
                margin:2rem auto 0;
            }
        }
        .questions{
            margin:4rem 2rem;
            .question-content{
                padding:2rem ;
                color:gray;
            }
            .question-options div{
                padding:2rem 1rem;  
                p{
                    width:80%;
                    font-size:1.5rem;
                }
            }
        }
        .icon{
            width:30%;
        }
    }

`

export default Last
