import React, { useState } from 'react'
import styled from "styled-components"
import { BsArrowRight } from "react-icons/bs";
import DreamJob from './DreamJob';
import ElevationSyllabus from './ElevationSyllabus';
import Testimonials from './Testimonials';
import StudentPlaced from './StudentPlaced';
import NextBatch from './NextBatch';
import PaymentPlans from './PaymentPlans';
import Mentors from './Mentors';
import Last from './Last';
import RegisterForm from './RegisterForm';

const ElevationAcademy = () => {
  const [togle,setTogle]=useState(false);
 
  return (
    <Wrapper>
      <div className='head-section flex container'>
        <div className='head-left'>
          <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
          <h2>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</h2>
          <p><BsArrowRight/> Complete Live Class from experts</p>
          <p><BsArrowRight/> Be the best Full stack developer</p>
          <p><BsArrowRight/>Job Guarantee</p>

          <div>
            <button onClick={()=>setTogle(true)} className='left-btn1'>Apply Now</button>
            <button className='left-btn2'>Get a call back</button>
          </div>

        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp' alt='headimg'/>
        </div>
      </div>

      <div className='batch container'>
        <div className='batch-left'>
          <h1>For 2023, 2022 & 2021 graduates</h1>
          <h2>Batch Starting: 1st May 2023</h2>
        </div>
        <div className='batch-right'>
            <div className='right-element '>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp' alt='first'/>
              <div className='flex flex-column'>
                <h2>Free Webinar</h2>
                <p>17th April</p>
              </div>
            <div className='line'></div>
            </div>
            <div className='right-element '>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp' alt='second'/>
              <div className='flex flex-column'>
                <h2>1:1 Counselling session</h2>
                <p>From 18th April</p>
              </div>
              <div className='line2'></div>
            </div>
            <div className='right-element'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp' alt='third'/>
              <div className='flex flex-column'>
                <h2>Batch Start</h2>
                <p>01 May'23, Mon-Fri (7-10PM)</p>
              </div>
            </div>
        </div>
      </div>

      <DreamJob/>
      <ElevationSyllabus/>

      <div className='upcoming-batch'>
          <div className='container upcoming'>
            <div className='batch-left'>
              <p>Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN</p>
              <button onClick={()=>setTogle(true)}>Apply Now</button>
            </div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp' alt='upcomming batch'/>
          </div>
      </div>

      <Testimonials start={0} end={6} infinite={false}/>
      <StudentPlaced/>
      <NextBatch/>
      <PaymentPlans set={setTogle}/>
      <Mentors start={0} end={3}/>
      <Last set={setTogle}/>
      {togle?<RegisterForm set={setTogle} />:""}
    </Wrapper>

    

    
  )
}

const Wrapper = styled.section`
      margin: 0 auto;
      .upcoming-batch{
        padding:2rem 5rem;
        width:100vw;
        background: #fdf0d7;
        
        .upcoming{
          display:flex;
          align-items:center; 
          width:120rem;
          

        }
        p{
          font-size: 2rem;
          color: #424242;
          margin-bottom: 10px;
          width: 70%;
          font-weight: 600;
          line-height: 1.4;
        }
        button{
          border-radius: 4px;
          border: none;
          padding: 10px 16px;
          background: #f78077;
          color: #f7f7f7;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .head-section{
        background-color: rgb(253, 240, 215);

      }
     
      .head-left{
        padding:7rem 5rem;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
       
        h1{
          font-size:3rem;
          font-weight:bold;
          line-height:4rem;
          color:#45474B;
        }
        h2{
          font-size:2rem;
          color:#45474B;
          font-weight:100;
          line-height:3rem;
        }
        p{
          color:#45474B;
          font-size:2rem;
          line-height:4rem;
          
        }
        .left-btn1,.left-btn2{
          padding:1rem 2rem;
          font-size:2rem;
          border-radius:1rem;
          margin-right:3rem;
        }
        .left-btn1{
          border: 2px solid #0398d3;
          background-color:#0398d3;
          color:white;
          
        }
        .left-btn1:hover{
          filter:brightness(80%);
        }
        
        .left-btn2{
          border: 2px solid #0398d3;
          color:#0398d3;
          box-shadow: 0px 1px 4px #AEDEFC;
          background-color: rgb(253, 240, 215);

        }

      }
      .batch{
        background: #e5f4fb 0 0 no-repeat padding-box;
        display:flex;
        justify-content:space-between;
      }
      .batch-left{
        padding:1.5rem 0;

        h1{
          font-size:2rem;
          font-weight:bold;
          color:#45474B;
          padding:2rem;
        }
        h2{
          font-size:2rem;
          color:white;
          background-color:#0398d3;
          padding:1rem;
          width:30rem;
        }
      }
      .batch-right{
        display:flex;
        margin:2rem 2rem 0 0;
        width:50vw;
        justify-content:space-between;
        align-items:center;
        .flex{
          align-items:center;
        }
      }
      .right-element{
        position:relative;
        text-align:center;
        h2{
          color: #095170;
        }
        p{
          font-size:1.5rem;
          background: #d6f3ff 0 0 no-repeat padding-box;
          border: 0.5px dashed #00a5ec;
          border-radius: 0.6rem;
          padding: 2px 1.5rem;
          color: #424242;
        }
        
      }

      .line{
        position:absolute;
        background:linear-gradient(90deg,#00a5ec,#99e0ff) 0 0 no-repeat padding-box;
        padding:2px 13rem;
        top:3rem;
        left:7.8rem;  
      }
      .line2{
        position:absolute;
        background:linear-gradient(90deg,#00a5ec,#99e0ff) 0 0 no-repeat padding-box;
        padding:2px 15rem;
        top:3rem;
        left:11.8rem;  
      }

      @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        .head-section{
          width:100vw;
          img{
            display:none;
          }
        }
        .head-left{
          h2{
            margin:3rem 0;
          }
          .left-btn1,.left-btn2{
            margin:2rem 0;
            width:30vw;
          }
        }
        .batch{
          width:100vw;
          flex-direction:column;
        }
        .batch-right{
          width:90vw;
          margin:2rem auto;
        }
      }
      @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        .head-section{
          width:100vw;
          flex-direction:column-reverse;
          img{
            width:90vw;
            margin-left:5%;
          }
        }
        .head-left{
          padding:5rem 2rem;
          
          .left-btn1,.left-btn2{
            width:50vw;
            margin:1rem auto;
          }
          h1{
            font-size:2.5rem;
          }
          h2{
            margin:2rem 0;
          }
        }
        .batch{
          width:100vw;
          flex-direction:column;
        }
        .batch-right{
          flex-direction:column;
          width:90vw;
          margin:0;
          align-items:flex-start;
          .flex{
            align-items:flex-start;
          }
        }
        .right-element{
          margin:2rem;  
          text-align:left;  
          display:flex;
          img{
            margin-right:2rem;
          }
        
        }
        .line,.line2{
          padding:3rem 2px;
          top:6rem;
          left:2.8rem;
        }
      }
      .upcoming-batch{
        padding:2rem 0;
        p{
          width:80%;
        }
        .upcoming{
          flex-direction:column;
          width:90vw;
        }
      }
      .batch-left{
        margin-bottom:2rem;
      }
      

`
export default ElevationAcademy
