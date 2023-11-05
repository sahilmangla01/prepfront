import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import WantCards from './WantCards'
import HomeJourney from './HomeJourney'
import { useNavigate } from 'react-router-dom'
import Mentors from '../Elevation Academy/Mentors'
import Testimonials from '../Elevation Academy/Testimonials'
import HomeLast from './HomeLast'

const Home = () => {
    const navi =useNavigate()
  return (
    <Wrapper>
        <div className='flex TopContainer'>
            <div className='flex-column  topHeading'>
                <div>Start your journey of success</div>
                <div className='text'>Personalised Coding Programs to make coding easier for you</div>
                <div>Want to know how PrepBytes can help you?</div>
                <Button>Know More</Button>
                
            </div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg' alt='home'/>
            </div>

            <div className='flex services'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp' alt='launchpad'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp' alt='homepage'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp' alt='sheleadsindia'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp' alt='aws'/>
            </div>


            <div className='flex backgroundJourney'>
                <img className='backImg' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg' alt='stairsofapproach'/>
                <div className='JourneyChart'>
                <div className='text'>How PrepBytes Mentorship driven Personalised Learning works?</div>
                        <div className='grid grid-two-column'>
                                <div className='JourneyCard card1'>
                                    <h1 >Personalised Leactures & weekly plan</h1>
                                    <div>Get learning videos & weekly plan based on your coding skills</div>
                                </div>
                                <img className='right' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='arrow'/>
                                <img className='left' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='arrow'/>
                                <div className='JourneyCard card2'>
                                    <h1 >PERSONALISED CODING ASSIGNMENTS</h1>
                                    <div>Practice coding questions that adapts based on your progress</div>
                                </div>
                                <div className='JourneyCard card3'>
                                    <h1 >DOUBT SOLVING BY CODING EXPERTS</h1>
                                    <div>Getting Stuck While Coding? Get all your doubts resolved.</div>
                                </div>
                                <img className='right' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='arrow'/>
                                <img className='left' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='arrow'/>
                                <div className='JourneyCard card4'>
                                    <h1 >CODE LIVE WITH TOP CODERS</h1>
                                    <div>Topic wise Live Coding sessions with top rated coders</div>
                                </div>
                        </div>
                        <img className='goal' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg' alt='goal'/>
                </div>
            </div>

            <WantCards/>
            <HomeJourney/>

            <div className='details'>
                <div className='detail'>
                    <div className='detail-top'>
                        <div className='top-left'>
                            <img className='profile' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png' alt='mamtakumari'/>
                            <h2>Mamta Kumari</h2>
                            <p>Co-Founder PrepBytes</p>
                            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='company'/>
                        </div>
                        <div className='background'><img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/know_details_back.svg' alt='background'/></div>
                        <div className='top-right'>
                                <h1>Attend Free sessions with industry experts and get valuable guidance</h1>
                                <p>How to master competitive coding?</p>
                                <button onClick={()=>navi('/master-competitive-programming')}>Know More</button>
                                <hr/>
                                <p>Know about our Full Stack Program</p>
                                <button onClick={()=>navi('/full-stack-program')}>Know More</button>
                                
                        </div>
                    </div>
                    <div className='detail-bottom'>
                        <div>
                            <img alt='detailbottomcard' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg'/>
                            <h2>100K+</h2>
                            <p>Coding Community</p>
                        </div>
                        <div>
                            <img alt='detailbottomcard' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg'/>
                            <h2>1000K+</h2>
                            <p>Hours of Live session</p>
                        </div><div>
                            <img alt='detailbottomcard' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg'/>
                            <h2>10000K+</h2>
                            <p>Hours of Learning</p>
                        </div><div>
                            <img alt='detailbottomcard' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg'/>
                            <h2>700K+</h2>
                            <p>Doubts solved</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mentorimage'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp' alt='mentorimg'/>
            </div>

    <Testimonials infinite={true}/>   
    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png' alt='placed'/> 
    <Mentors start={0} end={6}/>
    <HomeLast/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
    display:flex;
    flex-direction:column;
    
    .TopContainer{
        margin:3rem 0;
        width:100vw;
        justify-content:right;

        img{
            width:45vw; 
        }
    }
    .services{
        display:flex;
        justify-content:space-evenly;
        margin-bottom:4rem;
        img{
            width:10vw;
        }
    }
    .text{
        font-weight:bolder;
        color:#45474B;
        font-size:4.5rem;
    }
    .topHeading{
        display:flex;
        width:45vw;
        margin:10rem 4rem;;
        font-size:4.5rem;
        
       div:first-child{
        margin:2rem 0;
        color:#f78077
    }
   
    div:nth-child(3){
        margin:2.4rem 0;
        font-size:2.5rem;
        color:#f78077;


        }
    }

    

    .backgroundJourney{
        background: #f8fafa;
        padding-top:6rem;
        height:190vh;
        img{
            width:38vw; 
            
        }
        
    }
    .JourneyChart{
        margin:5rem 0 0 10rem;
        width:40vw;
        
        .text{
            font-size:3.4rem;
        }
        .JourneyCard{
            margin:3rem 0 0 ;
            div{
                
                border-radius:1rem;
                font-size:2rem;
                padding:2.5rem 2rem;
                line-height:2.3rem;

            }
            h1{
                margin-bottom:1rem;
            }
        }
        
        img{
            width:10vw;
            margin-top:16rem;
            position:relative;
        }
        .goal{  
            width:60rem;
            position:relative;
            bottom:13rem;
            
        }
        .right{
            right:6rem;
        }
        .left{
            left:10rem;
        }
    }

    .card1{
        color:#ED7D31;
        div{
        border:2px dotted #ED7D31;
        background-color:#F5EEC8;
    }
    }
    .card2{
        color:#FFCD4B;
        div{border:2px dotted #FFCD4B;
        background-color:#FFF8C9;}
    }
    .card3{
        color:#008170;
        div{border:2px dotted #008170;
        background-color:#C1D8C3;}
    }
    .card4{
        color:#FF4B91;
       div{ border:2px dotted #FF4B91;
        background-color:#FACBEA;
        }
    }

    .details{
        background: #fdf0d7;
        .detail{
            padding:5rem 2rem;
            margin:6rem auto 12rem;
            width:100rem;
            position:relative
        }
    }
    .detail-top{
        display:flex;
        position:relative;
        .top-left{
            background:white;
            z-index:1;
            width:50%;
            padding:2rem 1.5rem;
            text-align:center;

            h2,p{
               
                margin:1rem 0;
            }
            h2{
                font-size:3rem;
                color:#f78077;
            }
            p{
                font-size:2.3rem;
                color:gray
            }
            }
        .background{
                position:absolute;
                top:-5rem;
                left:-6rem;
        }
    }
    .profile{
        border-radius:1rem;
        padding:0 4rem;
        background: #fdf0d7;
            
    }

    .top-right{
        margin:auto 4rem;
        width:80vw;
        h1{
            font-size:3.5rem;
            color:#f78077;
            font-weight:bolder;
            margin-bottom:3rem;

        }
        p{
            font-size:3rem;
            color:gray;
           margin-top:1rem;
        }
        button{
            font-size:2rem;
            color:white;
            padding:1rem 3rem;
            border:none;
            border-radius:1.5rem;
            margin:3rem 0;
            background-color:#0398d3;
        }
    }
    .detail-bottom{
        display:flex;
        justify-content:space-around;
        text-align:center;
        width:100rem;
        position:absolute;
        bottom:-27rem;
        div{
            background:white;
            width:20rem;
            padding:2rem 3rem;
            border-radius:1.5rem;

            h2{
                font-size:3rem;
                margin:2rem 0;
            }
            p{
                font-size:2rem;
            }
        }
    }

    .mentorimage{
        background: #bcf2fb;
        padding:18rem 0 0rem;
        display:flex;
        justify-content:center;
    }

    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        .TopContainer{
            flex-direction:column-reverse;  
            img{
                width:100vw;
            }
        }
        .topHeading{
            width:90vw;
            margin:3rem auto;
        }
        .services img{
            width:20vw;
        }
        .backgroundJourney{
            flex-direction: column;
            height: auto;
            width: 100vw;
            position:relative;
            .backImg{
                opacity: 0.1;
                width:100vw;
                position:absolute;
                
            }
        }
        .JourneyChart{
         
            width:90vw;
            margin: 0 auto;

            .right,.left{
                width:20vw;
            }
            .JourneyCard{
                h1{
                    font-size:2rem;
                }
                div{
                    width:30vw;
                }
            }
            .text{
                text-align:center;
            }
            div{
               
                margin:0 aut0;
            }
        }

        .details .detail{
            padding:3rem 0;
            
             margin: 6rem auto 30rem;
        }
        .detail-top{
            flex-direction:column;
            width:90vw;
            margin:0 7%;
            .top-left{
                width:90%;
                h2{
                    margin:2rem;
                }
            }
        }
        .profile{
            padding: 0 25%;
        }
        .top-right{
            margin:3rem auto;
            width:70vw;
            text-align:center;
        }
        .detail-bottom{
            flex-wrap:wrap;
            width:80vw;
            margin: 0 10%;
            bottom:-52rem;
            div{
                width:30rem;
                margin: 2rem 0;
            }
        }
        .mentorimage{
                padding-top:25rem;
                img{
                    width:90vw;
                }
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        .TopContainer{
            flex-direction:column-reverse;  
            img{
                width:100vw;
            }
        }
        .topHeading{
            width:90vw;
            font-size:2.7rem;
            margin:3rem auto;
        }
        .text{
            font-size:2.5rem;
        }
        .services img{
            width:20vw;
        }
        .backgroundJourney{
            flex-direction: column;
            height: auto;
            width: 100vw;
            position:relative;
            .backImg{
                opacity: 0.1;
                width:100vw;
                position:absolute;
                
            }
        }
        .JourneyChart{
         
            width:90vw;
            margin: 0 auto;

            .right,.left{
                width:30vw;
            }
            .right{
                right:-1rem;
            }
            .left{
                left:4rem;
            }
            .goal{
                width:40rem;
            }
            .JourneyCard{
                h1{
                    font-size:2rem;
                }
                div{
                    width:45vw;
                    padding:1.5rem;
                }
            }
            .text{
                text-align:center;
                font-size:2.5rem;
            }
            div{
               
                margin:0 aut0;
            }
        }
        .details .detail{
            padding:3rem 0;
            width:100vw;
            //  margin: 6rem auto 30rem;
        }
        .detail-top{
            flex-direction:column;
            width:90vw;
            margin:0 7%;
            .top-left{
                width:90%;
                h2{
                    margin:2rem;
                }
            }
        }
        .profile{
            padding: 0 2%;
        }
        .top-right{
            margin:3rem auto;
            width:80vw;
            text-align:center;
            h1{
                font-size:2rem;
            }
        }
        .detail-bottom{
            flex-wrap:wrap;
            width:100vw;
            
            bottom:-34rem;
            div{
                
    margin-bottom: 2rem;
                width:15rem;
                img{
                    width:10vw;
                }
                h2{
                    font-size:1.8rem;
                }
                p{
                    font-size:1.5rem;
                }
            }
        }
        .mentorimage{
                padding-top:25rem;
                img{
                    width:90vw;
                }
        }
    }
`

export default Home
