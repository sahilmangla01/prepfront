import React from 'react'
import styled from "styled-components"

const FullstackCetification = () => {
  return (
    <Wrapper>
        <div className='certification-left'>
            <p>Get a real time project</p>
            <div className='certification-left-box'>
                <div>
                    <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/real.svg' alt='timeproject'/>
                    <span>Get a real time project</span>
                </div>
                <div>
                    <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/experience.svg' alt='timeproject'/>
                    <span>Experience agile methodology & Work with industry experts</span>
                </div>
                <div>
                    <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/deploy.svg' alt='timeproject'/>
                    <span>Deploy your project to Production</span>
                </div>
            </div>
        </div>
        <div className='certification-right'>
            <p>Certification</p>
            <p className='color'>Joint Co-Branded Participation Certificate & Partner Completion Certificate</p>
            <img className='certificate-img' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/nasscom-certificate-full-satck-mern.png' alt='certificate'/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
        display:flex;

        p{
            color: rgba(10,45,71,.9294117647058824);
            font-size: 3rem;
            margin:5rem 0 6rem;
            text-align: center;
}
.color{
    color:white;
    font-size:2rem;
    margin:0;
}
        .certification-left{
            width:50%;
            padding:1rem 5rem;
           
            
        }

        .certification-left-box{
            display:flex;
            margin-top:10rem;
            flex-direction:column;
            div{
                display:flex;
                align-items:center;
                justify-content:space-around;
                margin-bottom:4rem;
                
            }

            span{
                font-size:2rem; 
                width:30rem;
                rgba(72,55,55,.9294117647058824);
                margin-right:2.5rem;
            }
        }

        .certification-right{
            width: 50%;
            padding: 10px 50px 50px;
            background: rgba(244,163,76,.9294117647058824);
        }

        .certificate-img{
            width:80%;
            margin-top:3rem;
        }

        @media only screen and (max-width:${({theme})=>theme.media.mobile}){
            flex-direction:column;
            p{
                margin:4rem;
            }
            .certification-left{
                width:100vw;
                padding:1rem 2rem;
            }
            .certification-right{
                width:100vw;
                text-align:center;
                padding:1rem 2rem;
            }
            .certification-left-box{
                margin-top:5rem;
                span{
                    margin-left:2rem;

                }
            }
            .certificate-img{
                width:90%;
            }
        }     

`

export default FullstackCetification
