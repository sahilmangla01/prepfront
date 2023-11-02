import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import MCPwithus from "./MCPwithus";
import MCPCurriculum from "./MCPCurriculum";
import Student1 from "../carousel/Student1";

const MCP = () => {
  const [color,setColor] =useState(0)
  return (
    <Wrapper>
      <div className=" container">
        <div className="flex mcpHead">
          <div>
            <h1>MASTER COMPETITIVE PROGRAMMING</h1>
            <p>
              Master Competitive Programming Fom Zero And Become A Top-Rated
              Coder{" "}
              <span>Under The Guidance Of Top Competitive Programmers</span>
            </p>
            <Button>Enrol Now</Button>
          </div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp"
            alt="amazonaws"
          />
        </div>

        <div className="heighlights">
          <div className="heighlight first">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp"
              alt="course"
            />
            <p>9 months intensive bootcamp</p>
          </div>
          <div className="heighlight second">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp"
              alt="course"
            />
            <p>Quick doubt resolution</p>
          </div>
          <div className="heighlight third">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp"
              alt="course"
            />
            <p>Live coding sessions with top-rated coders</p>
          </div>
          <div className="heighlight forth">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp"
              alt="course"
            />
            <p>Get certificate on course completion</p>
          </div>
        </div>

        <div className="mentors">
        <p>Get Guidance From Industry Leading Mentors</p>
        <div>
          <p>Other Mentors You Will Be Interacting With</p>
          <div className="flex mentorList">
          <div className="mentor ">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp"
              alt="course"
            />
            <div className="flex flex-column">
              <h2>Mamta</h2>
              <p>Co-Founder, PrepBytes</p>
              <img className="company" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="mamta"/>
            </div>
          </div>
          <div className="mentor ">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp"
              alt="course"
            />
            <div className="flex flex-column">
              <h2>Kushdeep</h2>
              <p>SDE, ShareChat</p>
              <img className="company2" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp" alt="kushdeep"/>
            </div>
          </div>
          <div className="mentor ">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp"
              alt="course"
            />
            <div className="flex flex-column">
              <h2>Aveek</h2>
              <p>Mentor, PrepBytes</p>
              <img className="company2" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp" alt="Aveek"/>
            </div>
          </div>
          
          </div>
        </div>
        </div>

        <MCPwithus/>
        <MCPCurriculum/>
       

        

        


      </div>
      <hr/>
        <div className="enrollment">
        <div className="flex enroll ">
          <h1>SELECT BATCH</h1>

          <div onClick={()=>setColor(0)} className={color===0?"radio bg":"radio  "}>
            {/* <input type="radio" id="first" name="enroll" /> */}
            <div className="flex flex-column">
              <h2 >1st May</h2>
              <p>Enrollment Started</p>
            </div>
          </div>

          <div  onClick={()=>setColor(1)} className={color===1?"radio  bg":"radio  "}>
            {/* <input type="radio" id="second" name="enroll" /> */}
            <div className="flex flex-column">
              <h2>15th May</h2>
              <p>Enrollment Started</p>
            </div>
          </div>
          <div>
            <div className="btnsection flex flex-column">
              <div className="enroll-money">₹ 25000</div>
              
                <button className="btn1">Enroll Now</button>
              
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <Student1/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 5rem 0;
  .container {
    width: 110rem;
    text-align:center;
  }

  .mentors{
    padding:9rem 0 0;


    p{
      font-size:3rem;
      font-weight:500;
      padding:0;
    }

    div{
      p{
        padding:4rem 0;
        font-size:2rem; 
      }
    }

    .mentorList{
      justify-content:space-between;
    }
    .mentor{
      display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin: 1.5rem 0;
    width: 23vw;
    box-shadow: 0px 1px 6px rgba(162,161,161,.1607843137);
    

      img {
        width: 8rem;
      }

      h2{
        font-size:2rem;
      }
      p{
        font-size:1.5rem;
        padding:0;
      }
      .company{
        width:15rem;
      }
      .company2{
        width:25rem;
      }
      div{
        width:13vw;
        text-align:left;
      }

    } 
    

  }



  .heighlights {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .first {
    border-bottom: 4px solid #df3897;
    border-right: 4px solid #df3897;
  }
  .second {
    border-bottom: 4px solid #0398d3;
    border-right: 4px solid #0398d3;
  }
  .forth {
    border-bottom: 4px solid #eb9a00;
    border-right: 4px solid #eb9a00;
  }
  .third {
    border-bottom: 4px solid #7914a3;
    border-right: 4px solid #7914a3;
  }

  .heighlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin: 1.5rem 0;
    width: 35vw;

    img {
      width: 5rem;
    }
    p {
      font-size: 1.7rem;
      font-weight: bold;
      width: 25vw;
    }
  }
  .mcpHead {
    justify-content: space-between;
    margin-bottom: 3rem;
    text-align:left;

    h1 {
      font-size: 3rem;
      color: rgb(46, 145, 235);
      font-weight: bolder;
      width: 30vw;
      line-height: 4rem;
    }
    button {
      background-color: #00a6eb;
      width: 10vw;
      font-size: 1.5rem;
    }
    p {
      font-size: 2rem;
      width: 30vw;
      margin: 2.5rem 0;
      line-height: 3rem;
      span {
        font-weight: bolder;
      }
    }
  }

  .enrollment {
    padding: 7rem 0;
    
  }
  .enroll {
    justify-content: space-evenly;
    align-items: center;
    width: 130rem; 
    margin: 0 auto;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-right:4rem;
      
    }
    
    .radio {
      padding: 1.5rem;
      background: white;
      align-items: baseline;
      width: 15vw;
      border-radius: 1rem;
      border-bottom:4px solid  #0398d3; 
      box-shadow: 0px 1px 6px gainsboro;

      p {
        font-size: 1.5rem;
        margin-left: 10px;
        margin-top: 1rem;
      }
    }
    .bg{
      color:white;
      background-color:#0398d3;
      h2{
        color:white;
      }
      
    }
    h2 {
      font-size: 2.3rem;
      color: #0398d3;
      margin-left: 10px;
      font-weight: bold;
    }
  }
  .enroll-money {
    color: #0398d3;
    font-size: 3rem;
    font-weight: bold;
  }
  .btnsection {
    align-items: center;
    justify-content: center;
    margin-left:4rem;
  }
  .btn1 {
    font-size: 2rem;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    margin: 1rem 1rem 0 0;
  }
  .btn1 {
    background-color: #0398d3;
    border: 2px solid #0398d3;
  }
  
 
`;

export default MCP;
