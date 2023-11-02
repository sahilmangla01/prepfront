import React from 'react'
import styled from 'styled-components'
import { ContextProvider } from '../Context/ContextApi'
import ReactPlayer from 'react-player'


const VideoTutorial = () => {
  const {video,isLoading}=ContextProvider()

  if (isLoading) {
    return <div className="loading">Loading.....</div>;
  }
  return (
    <Wrapper>
        <div className='container videoHeader'>
          <div className='flex flex-column Heading'>
            <div className=''>Prepbytes Video Library</div>
            <p>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>
          </div>
          <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png' alt='videoHead'/>
          
        </div>


        <div className='container video-body'>
        <h1 className='category'>CATEGORIES</h1>

        <div className='flex videos'>
          {
            video.map((item,index)=>{
              return(
                <div className='flex flex-column video' key={index}>
                  <ReactPlayer width="18vw" height="30vh" url={item.video} controls/>
                  <h1>{item.name}</h1>
                
                </div>
              )
            })
          }
        </div>
        
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .videoHeader{
    background-color:#CDF5FD;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }

  .Heading{
    width:30vw;
    div{
      font-size:3.4rem;
      font-weight:bold;
      color:#00A9FF;
      margin-bottom:3rem;
    }
    p{
      font-size:1.5rem;
      line-height:2.6rem;
    }
  }

  
  .video-body{
    .videos{
      margin:3rem 0;
      justify-content:space-between;
      flex-wrap:wrap;

    }
    .video{
     margin:3rem 0;
     background:  linear-gradient(180deg,#fff 54%,#e0ebf9) ;
     padding:1.2rem ;
      border-radius:2rem;
      box-shadow: 0 10px 30px rgba(95,141,196,.2);
      h1{
        width:18vw;
        margin:3rem 0;
      }
    }
  }
  .category{
    font-weight:bold;
    color:#3969ad;
    font-size:2.5rem;
    margin:4rem 0 0;
    border-bottom: 3px solid #3969ad;
  
  }

`

export default VideoTutorial
