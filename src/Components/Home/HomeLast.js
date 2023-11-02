import React from 'react'
import styled from 'styled-components'

const HomeLast = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='banner'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp' alt="banner"/>
                <div className='banner-info'>
                    <h1>Want to represent your college</h1>
                    <p>Join <span>Prepbytes Campus Bussiness Manager Internship Program</span></p>
                    <button>Join Now</button>
                </div>
            </div>
        </div>

        <div className='container community'>
            <h1>PrepBytes for Mentors & Colleges</h1>
            <p>"Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
            <div className='community-cards'>
                    <div className='community-card'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png' alt='comm'/>
                        <h2>Be a part of growing Mentor Community of PrepBytes</h2>
                        <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
                        <button>Know More</button>
                    </div>
                    <div className='community-card'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/futuristic_algo.png' alt='comm'/>
                        <h2>Futuristic ALGO-driven Personalised learning module for your college</h2>
                        <p>Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college</p>
                        <button>Know More</button>
                    </div>
                    
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .banner{
        margin: 3rem auto ;
        background-size: cover;
        box-shadow: 0 0 2rem rgba(0,0,0,.1607843137254902);
        border-radius: 2rem;
        position: relative;
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
        }
    .banner-info{
        width: 50%;
        padding-top: 50px;
        padding-left: 50px;
        padding-bottom: 30px;
        h1{
            font-size: 35px;
            letter-spacing: 0;
            color: #004461;
        }
        p{
            font-size:2.4rem;
            span{
                color: #00afec;
            }
        }
        button{
            background: transparent linear-gradient(104deg,#f1127c,#f86667) 0 0 no-repeat padding-box;
            letter-spacing: 0;
            color: #f7f7f7;
            font-size: 18px;
            margin: 20px 0;
            text-transform: unset;
            border:none;
            padding: 10px 45px;
            border-radius:1rem;
        }
    }
    }

    .community{
        margin: 8rem auto 4rem;
        text-align:center;
        h1{
            font-size:3rem;
            margin-bottom:1.5rem;
        }
        p{
            font-size:2rem;
            color:gray;
        }
    }
    .community-cards{
        display:flex;
        justify-content:center
    }
    .community-card{
    box-shadow: 0 3px 30px rgba(0,0,0,.1607843137254902);
    border-radius: 1rem;
    background: #fff;
    height: 528px;
    margin: 20px 20px 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    h2,p{
        width:30rem;
    }
    h2{
        font-size:2.5rem;
        color: #004461;
        margin:1rem 0;
    }
    p{
        font-size:2rem;
        color:gray;
    }
    img{
        width:40rem;
    }
    button{
        font-size:2rem;
            color:white;
            padding:1rem 3rem;
            border:none;
            border-radius:1.5rem;
            margin:2rem 0;
            background-color:#0398d3;
    }
    }




`

export default HomeLast
