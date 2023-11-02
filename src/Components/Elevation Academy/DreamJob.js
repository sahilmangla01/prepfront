import React from 'react'
import styled from 'styled-components'

const DreamJob = () => {
  return (
    <Wrapper>
        <h1>How will you reach to your dream Job?</h1>
        <div className='dream flex '>
            <div className='dream-left flex flex-column'>
                    <div className='flex left-element '>
                        <span className='span1'>1</span>
                        <h2 className='left1'>Application & Shortlisting</h2>
                        <div className='connect'></div>
                    </div>
                    <div className='flex left-element '>
                        <span className='span2'>2</span>
                        <h2 className='left2'>Attend Free Webinar</h2>
                        <div className='connect'></div>
                    </div>
                    <div className='flex left-element '>
                        <span className='span3'>3</span>
                        <h2 className='left3'>Batch Commencement</h2>
                        <div className='connect'></div>
                    </div>
                    <div className='flex left-element '>
                        <span className='span4'>4</span>
                        <h2 className='left4'>7 Months Program</h2>
                        <div className='connect'></div>
                    </div>
                    <div className='flex left-element '>
                        <span className='span5'>5</span>
                        <h2 className='left5'>Guaranteed Placement</h2>
                        <div className='connect'></div>
                    </div>
            </div>
            <div className='dream-right'>
                    <div className='flex dream-right-element'>
                        <p>Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)</p>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp' alt='dream1'/>
                    </div>
                    <div className='flex dream-right-element'>
                        <p>Go through the free classes and learn the important concepts while understanding how the program unfolds.</p>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp' alt='dream1'/>
                    </div>
                    <div className='flex dream-right-element'>
                        <p>Embark on your journey of success once you receive the offer letter for successful enrolment.</p>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp' alt='dream1'/>
                    </div>
                    <div className='flex dream-right-element'>
                        <p>You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.</p>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp' alt='dream1'/>
                    </div>
                    <div className='flex dream-right-element'>
                        <p>The program comes with interview opportunities and a placement guarantee of minimum 5 LPA.</p>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp' alt='dream1'/>
                    </div>
            </div>
        </div>
        <h1>Why PrepBytes Elevation Academy?</h1>
        
        
        <div className='why-section'>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp' alt='whyimg'/>
                <h2>Live Learning</h2>  
                <p>Master Mern Stack in Live Classes taken by Experts</p>
            </div>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp' alt='whyimg'/>
                <h2>Learn with Industry Experts</h2>  
                <p>Learn with leading tech mentors and gain access to real-time web development experience.</p>
            </div>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp' alt='whyimg'/>
                <h2>Learn by Doing</h2>  
                <p>Gain in depth experience by building real world projects</p>
            </div>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp' alt='whyimg'/>
                <h2>Resume Building</h2>  
                <p>Get a resume that companies would shortlist</p>
            </div>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp' alt='whyimg'/>
                <h2>Mock Interviews</h2>  
                <p>Interview practice with industry veterans with real-time feedbacks</p>
            </div>
            <div className='why-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp' alt='whyimg'/>
                <h2>Interview Opportunities</h2>  
                <p>Get developer interview opportunities after course completion</p>
            </div>

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
        text-align:center;
        margin:9rem auto;
        width:120rem;
        h1{
            font-size:3rem;
          font-weight:bold;
          color:#45474B;
        }
        .dream{
            margin:8rem 0;
        }
        .dream-right{
            padding: 15px;  
            display: flex;
            flex-direction: column;
            background: #f7f7f7 0 0 no-repeat padding-box;
            border-radius: 10px;
            border: 1px;
            position: relative;
        }
        .dream-right-element{
            box-shadow: 0 0 20px rgba(0,0,0,.1607843137254902);
            border-radius: 10px;
            background: transparent linear-gradient(101deg,#fff,#f3fcff) 0 0 no-repeat padding-box;
            height: 105px;
            margin: 10px 0;
            p{
                width:70%;
                font-size:2rem;
                text-align:left;
                color: #424242;
                padding: 2rem 2rem;
                margin:1rem 0;
                max-height: 90px;
                overflow-y: scroll;
            }
        }
         
        .dream-left{
            padding:5rem;
            justify-content:space-between;
        }
        .left-element{
            font-size:1.2rem;
            align-items:center;
            width:25vw;
            border:1px solid gray;
            border-radius:1rem;
            padding:2rem;
            justify-content:center;
            position:relative;
            span{
                font-size:2.4rem;
                padding:0.5rem 1rem;
                border-radius:5px;
                position:absolute;
                left:-2rem;
            }
            .connect{
                position:absolute;
                background:linear-gradient(90deg,#00a5ec,#99e0ff) 0 0 no-repeat padding-box;
                padding:2px 3.2rem;
                // top:3rem;
                right:-6.5rem; 
                z-index:1;
            }
        }
        .left1{
            color: rgb(255, 158, 82);
        }
        .left2{
            color: rgb(232, 63, 63);
        }
        .left3{
            color: rgb(192, 39, 175);
        }
        .left4{
            color: rgb(32, 142, 189);
        }
        .left5{
            color: rgb(31, 194, 92);
        }
        .span1{
            background-color: rgb(255, 251, 248);
            border: 1px dashed rgb(255, 158, 82);
        }  
        .span2{
            background-color: rgb(255, 242, 242);
            border: 1px dashed rgb(232, 63, 63);
        }  
        .span3{
            background-color: rgb(255, 241, 253);
            border: 1px dashed rgb(192, 39, 175);
        }  
        .span4{
            background-color: rgb(226, 246, 255);
            border: 1px dashed rgb(32, 142, 189);
        
        }  
        .span5{
            background-color: rgb(231, 255, 240);
            border: 1px dashed rgb(31, 194, 92);
        
        }  
        .why-section{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 8rem 0;
        }
        .why-element{
            
            
            box-shadow: 0 0 20px rgba(0,0,0,.1607843137254902);
            border: 0.5px solid #c2c2c2;
            border-radius: 10px;
            padding: 2rem 4rem 2rem 2rem;
            margin: 15px;
            text-align:left;
            img{
                background: #fdf0d7 0 0 no-repeat padding-box;
                border-radius: 10px;
                height: 73px;
                width: 73px;
                padding: 12px;
            }
            h2{
                font-size:2rem;
                color: #3e4041;
                margin:1.5rem 0;
            }
            p{
                font-size:1.8rem;
                color:gray;
                line-height:3rem;
                width:30rem;
            }
        }

`
export default DreamJob
