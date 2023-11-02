import React, { useState } from 'react'
import styled from 'styled-components'
import {BsCheckCircleFill} from "react-icons/bs"
const NextBatch = () => {
    const [val, setVal]=useState(0)
  return (
    <Wrapper>
        <div className='container'>
            <div className='next-batch'>
                <h1>How can you be part of the next batch</h1>
                <p>Experts mentors designed to get you job-ready, designed for complete beginners as well. All this with absolute zero cost including real-time assignments that help you practice what you have learnt. for complete beginners as well.</p>
            </div>
            <div className='flex'>
                <div className='next-batch-left'>
                    <div onClick={()=>setVal(0)} className={val===0?"selected details":'details'}>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/registeration-icon.webp'alt='detail'/>
                        <p>Application</p>
                    </div>
                    <div onClick={()=>setVal(1)} className={val===1?"selected details":'details'}>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp'alt='detail'/>
                        <p>Shortlisting</p>
                    </div>
                    <div onClick={()=>setVal(2)} className={val===2?"selected details":'details'}>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp'alt='detail'/>
                        <p>Free Webinars</p>
                    </div>
                    <div onClick={()=>setVal(3)} className={val===3?"selected details":'details'}>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/payment-icon.webp'alt='detail'/>
                        <p>Enrollment</p>
                    </div>
                    <div onClick={()=>setVal(4)} className={val===4?"selected details":'details'}>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/start-batch-icon.webp'alt='detail'/>
                        <p>Batch Commencement</p>
                    </div>

                </div>
                <div className='next-batch-right'>
                   {
                    val===0? <div className='next-batch-content'>
                    <h1>Application</h1>
                    <ul>
                        <li><BsCheckCircleFill className='icon'/>We are inviting applications for 2023, 2022 & 2021 passouts.</li>
                        <li><BsCheckCircleFill className='icon'/>Apply for the next batch by filling up the application form.</li>
                        <li><BsCheckCircleFill className='icon'/>Fill all the information correctly.</li>
                        <li><BsCheckCircleFill className='icon'/>Any false information will lead to disqualification.</li>
                    </ul>
            </div>:""
                   }

{
                    val===1? <div className='next-batch-content'>
                    <h1>Shortlisting</h1>
                    <ul>
                        <li><BsCheckCircleFill className='icon'/>After you have submitted the application, your application will be reviewed by PrepBytes team.</li>
                        <li><BsCheckCircleFill className='icon'/>Candidates meeting the eligibility criteria will be shortlisted and the free webinars link will be shared to them over email.</li>
                       
                    </ul>
            </div>:""
                   }
                   
{
                    val===2? <div className='next-batch-content'>
                    <h1>Free Webinars</h1>
                    <ul>
                        <li><BsCheckCircleFill className='icon'/>Attend Free Webinar conducted by expert mentors</li>
                        <li><BsCheckCircleFill className='icon'/>Understand the importance of Web Development and pathway to crack Web Development Jobs</li>
                       
                    </ul>
            </div>:""
                   }
{
                    val===3? <div className='next-batch-content'>
                    <h1>Enrolment</h1>
                    <ul>
                        <li><BsCheckCircleFill className='icon'/>Students clearing the interview will be provided with admission letters.</li>
                        <li><BsCheckCircleFill className='icon'/>Selected students have to sign the offer letter and pay enrolment amount to enrol in the program.</li>
                        <li><BsCheckCircleFill className='icon'/>Enrolment Fees is 100% refundable if candidate wants to come out of the program within 7 days</li>
                       
                    </ul>
            </div>:""
                   }
{
                    val===4? <div className='next-batch-content'>
                    <h1>Free Webinars</h1>
                    <ul>
                        <li><BsCheckCircleFill className='icon'/>Batch will be started post enrolment. Classes will be completely live</li>
                        
                       
                    </ul>
            </div>:""
                   }
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color: #e5f4fb;
    padding:5rem 10rem;
   
    h1{
        font-size:4rem;
        font-weight:bold;
        color:#45474B;
        width:50rem;
    }
    
    p{
        font-size:2rem;
      color:gray;
      width:70rem;
    }
    .next-batch{
        display:flex;
        justify-content:space-around;


    }
    .next-batch-left{
        margin:5rem 0 5rem 2rem;
    }
    .next-batch-right{
        margin:5rem 0;
        padding: 2rem 5rem;
        background-color:white;
    }
    .details{
        display:flex;
        align-items:center;
        padding:2rem ;
        background-color:#f3f3f3;
        width:31rem;
        color: #c2c2c2;
        img{
            width:5rem;
            margin-right:2rem;
            opacity:0.3;
        }
    }
    .selected{
        background-color:white;
        color:#f78077;
        border-left: thick solid #f78077;
        img{
            opacity:1;
        }
    }
    ul{
        margin:5rem 0;
        li{
            font-size:2rem;
            padding:2rem 4rem 2rem 0;
            display:flex;
            align-items:center;
            
        }
    }
    .icon{
        font-size:2rem;
        color:#f78077;
        margin-right:2rem;
    }


`
export default NextBatch
