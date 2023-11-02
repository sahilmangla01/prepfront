import React from 'react'
import styled from "styled-components"
import { ContextProvider } from '../Context/ContextApi'

const Mentors = ({start, end}) => {
    const { isLoading, other}=ContextProvider()

    if (isLoading) {
        return <div className="loading">Loading.....</div>;
      }
  return (
    <Wrapper>
        <h1>PrepBytes Mentors</h1>
                <p>Learn directly from experienced software developers and master full stack</p>
        <div className='container mentors'>
                {
                    other.filter(item=>item.type === "mentor").slice(start,end).map((item,index)=>{
                        return(
                            <div className='mentor' key={index}>
                                <img className='back' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png' alt='background'/>
                                <img className='mentor-profile' alt='mentor' src={item.profile}/>
                                <h2>{item.name}</h2>
                                <p>{item.company}</p>
                                <p className='mentor-description'>{item.description}</p>
                                <img className='companyimg' src={item.companyimg} alt={item.company}/>

                            </div>
                        )
                    })
                }
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding:8rem 10rem;
text-align:center;

h1{
    font-size:4rem;
    font-weight:bold;
    color:#45474B;
    margin-bottom:2rem;
}
h2{
    font-size:2rem;
    text-align:left;
    margin-top:4rem;
    padding:0 3rem 2rem;
    
}

p{
    font-size:2.4rem;
  color:gray;
  font-weight:lighter;
}
.mentors{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

}
.back{
    width:30rem;
    
}
.mentor-profile{
    width:10rem;
    top:5rem;
    margin-left:1rem;
    border-radius:50%;
    position:absolute;
}
.mentor{
    width:30rem;
    margin:5rem 3rem;
    position:relative;
    box-shadow: 0 3px 36px rgba(0,0,0,.1607843137254902);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45rem;
    text-align:left;

    p{
        font-size:1.5rem;
        
    padding:0 1rem 2rem 3rem;
    }


}
.mentor-description{
    height:20rem;
    font-size:1.5rem;
    overflow-y:scroll;
    text-align:justify;

}
.companyimg{
    width:10rem;
    margin:1rem auto;
}

`

export default Mentors
