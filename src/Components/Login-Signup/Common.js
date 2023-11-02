import React from 'react'
import styled from 'styled-components'

const Common = () => {
  return (
    <Wrapper>
        <div className='flex container'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp' alt='login'/>
            <div className='info flex flex-column'>
                <img className='logo' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt='logo'/>
                <div className='flex'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp' alt='login' />
                    <div>
                    <h1>10K +</h1>
                    <h2>Student Enrolled</h2>
                    </div>
                </div>
                <div className='flex'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp' alt='login' />
                    <div>
                    <h1>1000 +</h1>
                    <h2>Reach in Colleges</h2>
                    </div>
                </div>
                <div className='flex'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp' alt='login' />
                    <div>
                    <h1>10K +</h1>
                    <h2>Hours of Learning</h2>
                    </div>
                </div>
                <div className='flex'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp' alt='login' />
                    <div>
                    <h1>150K +</h1>
                    <h2>Social Community</h2>
                    </div>
                </div>


            </div>

          
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background:#6499E9;
    
    .container{
        height:70rem;
        width:80rem;
        align-items:center;
        justify-content:space-between;
       
    }

    .logo{
        width:5vw;
        position:absolute;
        top:-3.5rem;
        left:7.5rem;
    }
    h1{
        font-size:2rem;
        font-weight:bold;
    }
    h2{
        font-weight:200;
    }
    .info{
        justify-content:center;
        height:50vh;
        padding:2rem 1rem;
        background:white;
        border-radius:1rem;
        position:relative;
        div{
            justify-content:center;
            align-items:center;
            
        }
       
    }
   

`

export default Common
