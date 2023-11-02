import React, { useState } from "react";
import styled from "styled-components";

const MCPCurriculum = () => {
    const [togle, setTogle] =useState(false)
    const [togle2, setTogle2] =useState(false)
    const clickHandler1 =()=>{
        setTogle(false);
        setTogle2(true);
    }
    const clickHandler2 =()=>{
        setTogle(false);
        setTogle2(false);
    }
  return (
    <Wrapper>
     
     <div className="flex flex-column ">
        <div onClick={()=>setTogle(true)} className="flex left">
            <img className="logo" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="c/c++/java"/>
            <div className={togle ?`leftTitle`:""}>Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
        </div>
        <div onClick={clickHandler1} className="flex left">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon2.webp" alt="DSA"/>
            <div className={!togle &&togle2?`leftTitle`:""}>Data Structures and Algorithms</div>
        </div>
        <div onClick={clickHandler2} className="flex left">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon3.webp" alt="competitivemath"/>
            <div className={!togle && !togle2?`leftTitle`:""}>Competitive Maths</div>
        </div>
        <img className="leftImg" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="lftimg"/>
     </div>


        <div className="right">

            {togle
            ?<ul>
            <li>C/C++/Java/Python Overview</li>
            <li className="empty"></li>
            <li>Logic Building</li>
            <li className="empty"></li>
            <li>Data Types</li>
            <li className="empty"></li>
            <li>Pattern Programming</li>
            <li className="empty"></li>
            <li>Operators and Expressions</li>
            <li className="empty"></li>
            <li>Input/Output</li>
            <li className="empty"></li>
            <li>Functions</li>
            <li className="empty"></li>
            <li>Functions and OOPs(Python)</li>
            <li className="empty"></li>
            <li>Pointers(C/C++)</li>
            <li className="empty"></li>
            <li>Arrays</li>
            <li className="empty"></li>
            <li>Structures</li>
            <li className="empty"></li>
            <li>Character Arrays and Strings</li>
            <li className="empty"></li>
            <li>Recursion</li>
            <li className="empty"></li>
            <li>Bit Manipulation</li>
            <li className="empty"></li>
            <li>STLs(C++)</li>
            <li className="empty"></li>
            <li>Collections (Java)</li>
            <li className="empty"></li>
            <li>Set, List, Tuples, Dictionary(Python)</li>
            
        </ul>
            :!togle &&togle2
            ?<ul>
            <li>Linked List</li>
            <li className="empty"></li>
            <li>Stack</li>
            <li className="empty"></li>
            <li>Queues</li>
            <li className="empty"></li>
            <li>Trees</li>
            <li className="empty"></li>
            <li>Heaps</li>
            <li className="empty"></li>
            <li>Graphs</li>
            <li className="empty"></li>
            <li>Segment Tree</li>
            <li className="empty"></li>
            <li>Searching</li>
            <li className="empty"></li>
            <li>Sorting</li>
            <li className="empty"></li>
            <li>Hashing</li>
            <li className="empty"></li>
            <li>Intro to DS/Algo</li>
            <li className="empty"></li>
            <li>Time Complexity</li>
            <li className="empty"></li>
            <li>Back Tracking</li>
            <li className="empty"></li>
            <li>Divide & Conquer</li>
            <li className="empty"></li>
            <li>Greedy Algorithms</li>
            <li className="empty"></li>
            <li>Dynamic Programming</li>
            <li className="empty"></li>
            <li>String Matching Algorithms</li>
            
        </ul>
            :<ul>
            <li>Prime Numbers</li>
            <li className="empty"></li>
            <li>Permutation & Combinations</li>
            <li className="empty"></li>
            <li>GCD</li>
            <li className="empty"></li>
            <li>LCM</li>
            <li className="empty"></li>
            <li>Probabilities</li>
            <li className="empty"></li>
            <li>Number Theory</li>
            <li className="empty"></li>
            <li>Modular Arithmetic</li>
            <li className="empty"></li>
            <li>Binary Exponention</li>
            <li className="empty"></li>
            <li>Matrix Exponentiation</li>
            <li className="empty"></li>
            <li>Game Theory</li>
            <li className="empty"></li>
            <li>Computational Geometry</li>
            
            
        </ul>}

            
        </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    

    .logo{
        width:5rem;
        
    }
    .leftImg{
        width:20vw;
        margin:1rem auto;
    }
    
    .left{
        box-shadow: 0px 1px 6px rgba(162,161,161,.1607843137);
        align-items:center;
        justify-content:space-around;
        width:38vw;
        height:10vh;
        margin:1rem 0;
        border-radius:1rem;
        
        
        
        div{
            display:flex;
            align-items:center;
            border-left:2px solid gray;
            font-size:1.7rem;
            text-align:left;
            width:30vw;
            height:5vh;
            padding: 0 1.7rem;
            
        }
        .leftTitle{
            color:#0398d3;
            height:7vh;
            border-left:2px solid #0398d3;
        }
       
    }
    .left:hover{
        box-shadow: 0px 1px 6px #D0D4CA;
    }
    
    
    .right{
        padding:4rem;
        border-radius:1rem;
        box-shadow: 0px 1px 6px rgba(162,161,161,.1607843137);
        width:30vw;
        height:62vh;
    }
    
    ul{
        height:52vh;
        text-align:left;
        overflow-y:scroll;
        li{
            font-size:1.4rem;
            color:gray;
            margin:1rem 0;

        }
        li::before{
            content:"";
            padding:1px 8px;
            border:3px solid #0398d3;
            border-radius:50%;
            margin-right:1rem;
        }
        .empty::before{
            content:"";
            padding:.8rem 0;
            border:2px solid #0398d3;
            background: #0398d3;
            border-radius:0%;
            margin-left:.85rem;

            
        }
        

        
        
    }

    ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset  0 0 5px grey; 
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background:#0398d3; 
        border-radius: 10px;
      }

`;

export default MCPCurriculum;
