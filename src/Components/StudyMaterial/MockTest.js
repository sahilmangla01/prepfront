import React from 'react'
import styled from 'styled-components'
import { ContextProvider } from '../Context/ContextApi'
import { Button } from '../Styles/Button'
import RazorPay from '../../RazorPay'

const MockTest = () => {
  const { mock , isLoading} =ContextProvider()

 

  

  if (isLoading) {
    return <div className="loading">Loading.....</div>;
  }
  return (
    <Wrapper>

      <div className='mocktestheader'>
          <div className='container'>
            <h1>Mock tests</h1>
            <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
          </div>
      </div>

      <div className='container'>
        <h1 className='featured'>Featured Mock Tests</h1>
        <div className='pastmocktest'>
            <hr/>
            <p>Past Mock tests</p>
        </div>


        <div className='cards'>
            {
              mock.filter(item=>item.type==="Mock").map((e,index)=>{
                return(
                  <div className='card card1 flex flex-column' key={index}>
                  <img src={e.img} alt={e.name}/>
                  <div className='name'>{e.name}</div>
                  <div className='flex'>
                    <p>{e.date} Date</p>
                    <p>{e.Participants} Participants</p>
                    <p>{e.duration} duration</p>
                  </div>
                  <RazorPay />
                  {/* <button className='icons'><FaArrowRight /></button> */}
              </div>
              
                )
              })
            }
        </div>

        <h1 className='featured'>Practice Tests</h1>
        <div className='pastmocktest'>
            <hr/>
            <p>Topic Wise</p>
        </div>


        <div className='cards'>
            {
              mock.filter(item=>item.type==="TopicMock").map((e,index)=>{
                return(
                  <div className='card card2 flex flex-column' key={index}>
                  <img src={e.img} alt={e.name}/>
                  <div className='name'>{e.name}</div>
                  
                  <Button>Buy Now</Button>
                  {/* <button className='icons'><FaArrowRight /></button> */}
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
.container{
  margin:0 15rem ;
}

.cards{
  display:flex;
  flex-wrap:wrap;
  margin:3rem 0;
  justify-content:space-around;
  
  .card{
    padding:2rem;
    margin: 1.5rem 0;
    border-radius: 5px;
    background:  linear-gradient(180deg,#e0ebf9,#fff 54%,#fff) ;
    justify-content:space-evenly;
    align-items:center;
    box-shadow: 0 10px 30px rgba(95,141,196,.2);
    
  }
  .card1{
    width:20vw;
  }
  .card2{
    width:15vw;
  }
  .card3{
    width:15vw;
    background:  linear-gradient(180deg,#ffe4b6,#fff 54%,#fff) ;

    button{
      margin-top:3rem;
    }
  }
  
  img{
    box-shadow: 0 10px 30px rgba(95,141,196,.2);
    width:5vw;
    margin:1rem 0;
  }
  .name{
    font-size:2.3rem;
    text-align:center;
    color:#3969ad;
    margin:2rem 0;
    
  }
  p{
    margin:2.2rem 0;
    border-right:4px solid #e0ebf9;
    font-size:1.4rem;
    text-align:center;
    padding:1rem 0 0;
    height:5rem;
  }
  button{
    width:9vw;
    padding:1rem;
    font-size:1.5rem;
    background:#1F4172;
    border: 2px solid #1F4172;
  }
  
}
.featured{
  color:#3969ad;
  font-size:3rem;
  margin:4rem 0;
}
    .mocktestheader{
      background: transparent linear-gradient(180deg,#3969ad,#1d3557) 0 0 no-repeat padding-box;
      min-height:20rem;
      color :white;
      padding:4rem 0 2rem;
      
      

      h1{
        font-size:3rem;
        font-weight:bold;
      }
      p{
        font-size:1.5rem;
        padding-top:4rem;
        width:38vw;
        line-height:2rem;
      }
    }

    .pastmocktest{
      position:relative;
      margin:0 0 2rem;
      text-align:center;
      
      hr{
        border:0.3rem solid #3969ad; 
        border-radius:1rem;
      }
      p{
        font-size:2.5rem;
        color:#ffa000;
        text-transform:uppercase;
          position:absolute;
          top:-1rem;
          left:36%;
        background:white;
        padding:0 3rem;
      }
    }

`
export default MockTest
