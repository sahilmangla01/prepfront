import React from 'react'
import styled from 'styled-components'

const HomeLast = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='banner'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp' alt="banner"/>
                <img className='image2' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-Homepage-mobile.webp' alt="banner"/>
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

        <div className='popularBlog'>
            <div className='container '>
                <h1>Most Popular Blogs</h1>

                <div className='flex blogs'>
                    <div>
                        <img src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='popular Blog'/>
                        <h2>Top 50 C Programming Interview Questions and Answers</h2>
                        <p> Read Now</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png' alt='popular Blog'/>
                        <h2>Motivational Story : He got his first placement success after being rejected by 22 companies</h2>
                        <p> Read Now</p>
                    </div>
                    <div>
                        <img src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='popular Blog'/>
                        <h2>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</h2>
                        <p> Read Now</p>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className=' expert'>
            <div className='expert-left'>
                <h1>Talk to our experts</h1>
                <h2>Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</h2>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/call_back.svg' alt='img'/>
            </div>
            <div className='expert-right'>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='number' placeholder='Phone'/>
                    <textarea rows="10" cols="50"></textarea>
                    <button onClick={(e)=>e.preventDefault()}>Request a CallBack</button>
                </form>
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
        display:flex;
        flex-wrap:wrap;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
        }
        .image2{
            display:none;
            
            position:static;
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
        justify-content:center;
        flex-wrap: wrap;
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

    .popularBlog{
        background: #fdf0d7;
        padding:4rem 0;
        h1{
            text-align:center;
            font-size:4rem;
            margin:3rem 0 5rem;
        }
        .blogs{
            margin:2rem 2rem;
            justify-content:center;
            flex-wrap:wrap;
            
            div{
                background-color:white;
                width:20vw;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                margin:0 2rem;
                img{
                    width:20vw;
                    margin: 0 0 1rem;
                }
                h2{
                    width:90%;
                    margin:0 auto 3rem;
                    font-size:2.5rem;
                    font-weight:100;
                    color:gray;
                }
                p{
                    width:100%;
                    text-align:center;
                    margin-bottom:2rem;
                    color:#0398d3;
                    font-size:2rem;
                }
            }
            div:hover{
                box-shadow: 0 3px 30px gray;
            }
        }
    }
    .expert{
        width:60vw;
        margin:9rem auto;
        padding: 5rem 0 4rem;
        display:flex;
        justify-content:center;
        border-radius:1rem;
        box-shadow: 0 3px 35px rgba(0,0,0,.1607843137254902);
        background: #f8f7fd;
        .expert-left{
            width:40vw;
            display:flex;
            flex-direction:column;
            align-items:center;
            h1{
                font-size:3rem;
                font-weight:bold;
                color:#424242;
                width:30vw;
                text-align:center;
            }
            h2{
                margin:2rem 0;
                font-size:2rem;
                color:gray;
                font-weight:100;
                width:35rem;
                text-align:center;
            }
            img{
                width:25vw;
            }
        }
        .expert-right{
            width:40vw;
            form{
                display:flex;
                flex-direction:column;
                width:60%;
                margin:5rem auto 3rem;
                input{
                    font-size:2rem;
                    margin:2rem 0;
                    padding:1rem ;
                    border-radius:10px;
                    border: 1px solid #d4d4d4;
                    background: #f5f2ff;
                }
                textarea{
                    margin:2rem 0 4rem;
                    border-radius:10px;
                    border: 1px solid #d4d4d4;
                    background: #f5f2ff;
                }
                button{
                    border:none;
                    background-color: #f78077;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                    padding:12px;
                }
            }
        }
    }

    @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
        .popularBlog .blogs{
            justify-content:space-between;
            div{
                margin:2rem auto;
                width:37vw;
                img{
                    width:37vw;

                }
            }
        }
        .expert{
            width:80vw;
            flex-direction:column;
            .expert-left{
                width:100%;
                h1{
                    
                    width:70%;
                }
                h2{
                    margin:2.5rem;
                }
                img{
                    width:40vw;

                }
            }
            .expert-right{
                width:100%;
                form{
                    width:80%;
                }
            }
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        
        .banner{
            flex-direction:column-reverse;
            img{
                display:none;
            }
            .image2{
                display:block;
                position:absolute;
            }
            .banner-info{
                width:90%;
                padding-left:0;
                margin: 0 auto 20rem;
                h1,p{
                    font-size:2rem;
                    text-align:center;
                    margin-bottom:1rem;
                }
                button{
                    margin:1rem 20%;    
                }

            }
        }
        .community{
            h1{
                font-size:2.5rem;
            }
        }
        .community-card{
            width:90vw;
            img{
                width:90%;
            }
            h2{
                font-size:2rem;
                margin:0;
            }
            p{
                font-size:1.7rem;
                width:80%;
            }
        }

        .popularBlog .blogs{
            justify-content:space-between;
            div{
                margin:2rem auto;
                width:80vw;
                img{
                    width:80vw;

                }
            }
        }

        .expert{
            width:90vw;
            flex-direction:column;
            .expert-left{
                width:100%;
                h1{
                    font-size:2.5rem;
                    width:70%;
                }
                h2{
                    margin:2rem;
                    width:70%;
                }
                img{
                    width:60vw;

                }
            }
            .expert-right{
                width:100%;
                form{
                    width:80%;
                    margin:2.5rem auto;
                }
            }
        }
        
    }




`

export default HomeLast
