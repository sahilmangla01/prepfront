import React,{useState} from 'react'
import styled from 'styled-components'
import {BsPlus} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"

const Faq = () => {
    const [togle,setTogle]=useState(true)
    const [togle2,setTogle2]=useState(true)
    const [togle3,setTogle3]=useState(true)
    const [togle4,setTogle4]=useState(true)
    const [togle5,setTogle5]=useState(true)
  return (
    <Wrapper>
            <h1>FAQ</h1>
        <div className='faq'>
              <div onClick={()=>setTogle(!togle)} className='question'>
                <h2 >What is the duration of this program</h2>
                {togle?<BsPlus className='icon'/>:<BiMinus className='icon'/>}
              </div>
             {!togle?<p>Duration of this program is 3-4 months</p>:""}

              <div onClick={()=>setTogle2(!togle2)} className='question'>
                <h2>What will be the primary language for this program</h2>
                {togle2?<BsPlus className='icon'/>:<BiMinus className='icon'/>}
              </div>
             {!togle2?<p>Javascript would be the primary language.</p>:""}


              <div onClick={()=>setTogle3(!togle3)} className='question'>
                <h2>Is their any pre-requisite this program</h2>
                {togle3?<BsPlus className='icon'/>:<BiMinus className='icon'/>}
              </div>
             {!togle3?<p>No, there are no pre-requisites.</p>:""}


              <div onClick={()=>setTogle4(!togle4)} className='question'>
                <h2>What if I miss the Live Session</h2>
                {togle4?<BsPlus className='icon'/>:<BiMinus className='icon'/>}
              </div>
             {!togle4?<p>Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard.</p>:""}
              
              
              <div onClick={()=>setTogle5(!togle5)} className='question'>
                <h2>How is this program different from other full stack courses?</h2>
                {togle5?<BsPlus className='icon'/>:<BiMinus className='icon'/>}
              </div>
             {!togle5?<p>This program provides not only learning but also complete experience of a full stack developer & software development cycle.</p>:""}
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin:9rem 0;
h1{
    font-size:4rem;
    font-weight:bold;
    color:#45474B;
}
h2{
    font-size:2rem;
    font-weight:lighter;
    color:#45474B;
}

p{
    margin:2rem 0;
    display:flex;
    justify-content:space-between;
    width:70rem;
    padding:0 2rem;
    text-align:left;
    font-size:1.8rem;
    color:gray;
}
.icon{
    font-size:3rem;
}
.faq{
   display:flex;
   margin:5rem 0;
   align-items:center;
   flex-direction:column;

}
.question{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem ;
    box-shadow: 0 4px 4px rgba(0,0,0,.10196078431372549);
    border-radius:1rem;
    width:70rem;

}
color{
    background: transparent linear-gradient(89deg,rgba(45,111,162,.8862745098039215),rgba(2,9,14,.9294117647058824)) 0 0 no-repeat padding-box;
    h2{
        color:white;
    }
}
.question:hover{
    background: transparent linear-gradient(89deg,rgba(45,111,162,.8862745098039215),rgba(2,9,14,.9294117647058824)) 0 0 no-repeat padding-box;
    color:white;
    h2{
        color:white;
    }
}

`

export default Faq
