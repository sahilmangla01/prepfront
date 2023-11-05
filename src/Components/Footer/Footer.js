import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { MdMessage } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      
      <div className="container">
        <div className="grid grid-three-column">
         
         <div className="flex flex-column">
         <div>
              <h1>Follow us</h1>
              <div className="flex">
                <FaFacebookSquare className="icons" />
                <FaInstagramSquare className="icons" />
                <FaLinkedin className="icons" />
                <FaYoutube className="icons" />
              </div>
            </div>

            <div>
              <h1>Contact Us</h1>
              <div >
                <div className="flex contactBox">
                  <BsFillTelephoneOutboundFill className="icons" />
                  <div className="contact">+91-7969 0021 11</div>
                </div>
                <div className="flex contactBox">
                  <MdMessage className="icons" />
                  <div className="contact">support@prepbytes.com</div>
                </div>
                <div></div>
              </div>
            </div>
         </div>
        
          

            
          

          <div className="flex flex-column">
          <div >
              <h1>Latest Articles</h1>
              <div className="article-text">
                Cal Command in linux with Examples Head Command Linux Examples
                SAR Command Linux Monitor System Performance IPtables Command in
                Linux with Examples rm command Linux Examples
              </div>
              
            </div>

            <div >
              <h1>Popular Articles</h1>
              <div className="article-text">
               GIT Interview Questions and Answers Cloud
                Computing Interview Questions Automation Testing Interview
                Questions Django Interview Questions MongoDB Interview Questions
              </div>
            </div>
          </div>
          
            

            
          

         
        
            <div className="QuickLinks">
              <h1>Quick Links</h1>
              <NavLink to="/mock-test"><div>Mock Tests</div></NavLink>
              <NavLink to="video-tutorial"><div>Video Tutorial</div></NavLink>
              <NavLink to="master-competitive-programming"><div>Master Programming</div></NavLink>
              <NavLink to="full-stack-program"><div>Fullstack Program</div></NavLink>
              <NavLink to="elevation-academy"><div>Elevation Academy</div></NavLink>
              
              
            </div>
          

            


            


        </div>

        <div className="flex copyrightBox">
            <div>Copyright©2023</div>
            <div className="flex policy">
              <div>Privacy Policy</div>
              <div>Refund Policy</div>
              <div>Terms of Use</div>
            </div>
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  width: 100vw;

  .QuickLinks{
    margin-left:5rem;
    div{
      color:gray;
      font-size:2rem;
      margin:0 0 .8rem
    }
  }

 
  .icons {
    font-size: 3rem;
  }
  .contact{
    margin-left:2rem;
    font-size:1.8rem;
  }
  .contactBox{
    margin:2rem 0 0;
  }
  .grid{
    margin:0 auto;
    div{
      
     
      h1{
        margin:  3rem 0;

      }
      .article-text{
        font-size:1.8rem;
        line-height:3rem;
        letter-spacing:.1rem;
        text-align:justify;
        margin-bottom:3rem;
        
      }
    }
  }

  .copyrightBox{
    margin:3rem 0 0;
    color:gray;
    padding:.5rem 0;
    justify-content:space-between;
    border-top: 2px solid #E4E4D0;
    font-size:1.6rem;

    .flex{
      width:25vw;
      justify-content:space-between;
    }
  }

  @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
    padding:4rem 2rem;
    .grid{
      gap:0;
    }
    .contactBox{
      margin-right:2rem;
    }
  }
  @media only screen and (max-width:${({theme})=>theme.media.mobile}){
    padding:4rem 2rem;
    .grid-three-column{
      grid-template-columns: repeat(1,1fr);
    }
    .QuickLinks{
      margin:0;
    }
    .copyrightBox {
      flex-direction:column;
    }
    .policy{
      justify-content:space-between;
      margin-top:2rem;
    }
    .copyrightBox .flex{
      width:100%;
    }
  }
  .
`;

export default Footer;
