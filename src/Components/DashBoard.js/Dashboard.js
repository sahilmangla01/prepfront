import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button } from '../Styles/Button'
// import {RxHamburgerMenu} from "react-icons/rx"

const Dashboard = () => {
  let login = localStorage.getItem('login')
  const [data,setData] = useState([])
  const [tog,setTog] = useState(false)
  useEffect(()=>{
    if(login){
      const token = localStorage.getItem("token");
        const token1 = window.atob(token.split(".")[1]);
        const jsonString = `${token1}`;
        const obj = JSON.parse(jsonString);
        const userId = obj._id;

        axios.post('https://prep-clone.onrender.com/api/getdashboard',{userId:userId})
        .then(res=>setData(res.data))
        .catch(err =>console.log(err))
    }
  })

  // console.log(data.mock[0].mockId.name);
  return (
    <Wrapper>
      <div className={tog?'main':"main main2"}>
        
      <div className='togle'>
        <img onClick={()=>setTog(!tog)} src='https://img.freepik.com/premium-vector/education-icon-vector-illustartion-college-cap-graduate-hat-symbol-student-degree-sign_87543-11779.jpg' alt='hat'/>
        <p>My courses</p>
        </div>
      </div>

    <div className='cards'>
    {
      data.mock && data.mock.map((item,index)=>{
        return(
          <div className='card  flex flex-column' key={index}>
                  <img src={item.mockId.img} alt={item.mockId.name}/>
                  <div className='name'>{item.mockId.name}</div>
                  <Button>Take Test</Button>
                  
              </div>
        )
      })
    }
    {
      data.fullstack?<div className='card2  flex flex-column' >
      <div className='flex box'>
      <img className='logo' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt='prep'/>
      <div >
        
          
          <div className='time'>
            <p>Start Date</p>
            <p>2 Mar 2023</p>
          </div>
       
        
          
          <div className='time'>
            <p>last Date</p>
            <p>29 Oct 2023</p>
          </div>
        
          
      </div>
      </div>
      <div className='name'>{data.fullstack}</div>
      <Button>Go to Course</Button>
      <img className='back' src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/bg-card+(1).png' alt='backgrond'/>
      
  </div>:""
    }
    {
      data.master?<div className='card2  flex flex-column' >
      <div className='flex box'>
      <img className='logo' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt='prep'/>
      <div >
        
          
          <div className='time'>
            <p>Start Date</p>
            <p>2 Mar 2023</p>
          </div>
       
        
          
          <div className='time'>
            <p>last Date</p>
            <p>29 Oct 2023</p>
          </div>
        
          
      </div>
      </div>
      <div className='name'>{data.master}</div>
      <Button>Go to Course</Button>
      <img className='back' src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/bg-card+(1).png' alt='backgrond'/>
      
  </div>:""
    }
             
    </div>
    
    </Wrapper>
  )
}

const Wrapper = styled.section`
display:flex;
.icon{
  font-size:3rem;
  margin-left:2rem;
}
.main{
  width:5vw;
  box-shadow: 10px 0 10px -5px rgb(33 35 38/10%);
  transition:all 2s ease;
  p{
    width:0vw;
    color:#0398d3;
    margin-top:2rem;
    margin-left:1rem;
    visibility:hidden;
  }
}
.togle{
  font-size:2rem;
  display:flex;
  align-items:flex-start;
  justify-content:flex-start;  
  text-align:center;
  
  border-right:6px solid #0398d3;
  
 
  img{
    width:5vw;
  }
}

.main2{
      width:20vw;
      p{
        visibility:visible;
        width:10vw;
        
      }
}



.cards{
  width:70vw;
  display:flex;
  flex-wrap:wrap;
  margin:3rem auto;
  justify-content:space-around;
  
  .card{
    padding:2rem;
    margin: 1.5rem 0;
    border-radius: 5px;
    background:  linear-gradient(180deg,#e0ebf9,#fff 54%,#fff) ;
    justify-content:space-evenly;
    align-items:center;
    width:20vw;
    height:50vh;
    box-shadow: 0 10px 30px rgba(95,141,196,.2);
    button{
      padding:1rem 0;
    }
    img{
      box-shadow: 0 10px 30px rgba(95,141,196,.2);
      width:10vw;
      margin:1rem 0;
    }
    
  }
  .name{
    font-size:2rem;
    text-align:left;
    font-weight:bold;
    margin:2rem 0;
    
  }
  .card2{
    padding:2rem;
    margin: 1.5rem 0;
    border-radius: 5px;
    height:50vh;
    width:20vw;
    justify-content:space-evenly;
    position:relative;
    // background:yellow;
    background:  linear-gradient(180deg,#e0ebf9,#fff 54%,#fff) ;
    button{
      padding:1rem 0;
    }
    .logo{
      width:7vw;
    }
    .back{
      position:absolute;
      top:0rem;
      left:-0.2rem;
    }
  }
  .box{
    justify-content:space-around;
    align-items:center;
    div{
      border-left:1px solid gainsboro;
      padding-left:2rem;
      .time{
        margin:1rem 0;
        font-size:1.4rem;
       border:none;
      }
    }
    
  }
}
  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    // .icon{
    //   font-size:2rem;
    //   position:absolute;
    //   top:2rem;
    // }
    // .main{
    //   position:absolute;
    //   width:0vw;
    //   height:100vh;
    //   background-color:white;
    // }
    // .togle{
    //   img{
    //     width:20vw;
    //   }
    // }

    
    // .main2{
    //   width:80vw;
    //   p{
    //     width:40vw;
    //   }
    // }
    .main{
      display:none;
    }
    .cards{
      margin-left:0;
      width:100vw;
      flex-direction:column;
      .card{
        width:80vw;
        margin: 2rem auto;
        img{
          width:50%;
        }
        button{
          padding:1rem ;
        }
      }
      .card2{
        width:80vw;
        margin:2rem auto;
        .logo{
          width:50%;
        }
        button{
          padding:1rem ;
        }
      }
    }
  }

  @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    .main{
      display:none;
    }
    .cards{
      margin-left:0;
      width:100vw;
      flex-wrap:wrap;
      .card{
        width:40vw;
        height:auto;
        margin:2rem auto;
        img{
          width:60%;
        }
        button{
          padding:1rem ;
        }
      }
      .card2{
        width:40vw;
        margin:2rem auto;
        height:auto;
        .logo{
          width:50%;
        }
      }
    }
  }
 
 
`
export default Dashboard
