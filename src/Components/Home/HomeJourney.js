import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"

const HomeJourney = () => {
    const navi =useNavigate()
  return (
    <Wrapper>
        <div className='home-journey-left'>
            <h1 className='first'>Are you an Experienced Professional willing to Switch?</h1>
            <div className='home-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg' alt='homejourney'/>
                <h2>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</h2>
            </div>
            <div className='home-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg' alt='homejourney'/>
                <h2>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</h2>
            </div>
            <div className='home-element'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg' alt='homejourney'/>
                <h2>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</h2>
            </div>

            <p>PrepBytes Elevation Academy - <span>4 months Full Stack Program with Job Guarantee</span></p>
            <button onClick={()=>navi('/elevation-academy')}>Know More</button>

        </div>
        <div>
        <h1 className='second'>Are you an Experienced Professional willing to Switch?</h1>
        <div className='home-journey-right'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg' alt='images'/>
            <div>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg' alt='tools'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg' alt='home'/>
                
            </div>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
        display:flex;
        padding:6rem 0;
        justify-content:center;
        margin:0 auto;
        width:130rem;
        
        .second{
            display:none;
        }
        h1{
            font-size:3rem;
            color:#3e4041;
            font-weight:bold;
            
        }
        h2{
            font-size:2rem;
            font-weight:100;
            color:gray;
        }
        p{
            font-size:2rem;
            color:#3e4041;
            line-height:2.5rem;
            span{
                color:gray;
            }
        }

        .home-journey-left{
           margin:2rem 4rem;
        }
        .home-journey-right{
            display:flex;
        }

        .home-element{
            background: #fff 0 0 no-repeat padding-box;
            box-shadow: 0 3px 25px rgba(0,0,0,.10196078431372549);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items:center;
            margin: 3rem 0 3rem 5rem;
            padding:3rem 3rem;
            position:relative;

            img{
                position:absolute;
                left:-6rem;
                top:0;
            }
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
        @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
            flex-direction:column-reverse;
            width:100vw;
            .home-element ,p{
                width:60%;
                margin:3rem auto;
            }
            .first{
                display:none;
            }
            .second{
                display:block;
                width:90vw;
                margin: 0 auto;
            }
            button{
                width:40%;
                margin:2rem 10rem;
            }
        }
        @media only screen and (max-width:${({theme})=>theme.media.mobile}){
            flex-direction:column-reverse;
            width:100vw;
            .home-element ,p{
                width:80%;
                padding:2rem;
            }
            .first{
                display:none;
            }
            .second{
                display:block;
                width:90vw;
                margin: 0 auto;
                font-size:2rem;
            }
            .home-journey-right{
                flex-direction:column;
            }
            button{
                width:60%;
                margin:2rem 5rem;
            }
        }

`
export default HomeJourney
