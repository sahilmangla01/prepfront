import React, { useState } from "react";
import styled from "styled-components";

const FullstackSyllabus = () => {
  const [val, setVal] = useState(0);
  return (
    <Wrapper>
      <div className="container">
        <div className="syllabus ">
          <div className="syllabus-top-heading">
            <p>Program Syllabus & Projects</p>
            <button>Download Syllabus</button>
          </div>
          <p className="text">
            We have reverse engineered our syllabus by talking to the best
            companies and understanding what skills the industry needs the most
            right now.
          </p>
        </div>

        <div className="stack-syllabus">
          <div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>Web Development Basics - HTML, CSS, BootStrap</p>
                <span>Week 1-2</span>
              </div>
              <p className="content-text">
                Get to learn how websites work. Start your web development
                journey with the basics of HTML and learn how to create
                impressive websites using HTML, CSS, and Bootstrap.
              </p>
            </div>
            <div
              className={
                val === 1
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 1 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(1)}>View Details</button>
              )}
            </div>
          </div>
          {val === 1 ? (
            <ul className="syllabusList">
              <li>How websites work</li>
              <li>Web Development Overview - Advantages</li>
              <li>HTML Introduction</li>
              <li>Structure of Webpage</li>
              <li>HTML Tags</li>
              <li>Texts, Images, Videos</li>
              <li>Lists, Forms, Tables</li>
              <li>Links, Anchor tags</li>
              <li>HTML Divs</li>
              <li>CSS Introduction</li>
              <li>Inline vs Internal vs External styling</li>
              <li>CSS Display</li>
              <li>CSS Font Styling, background, margin, padding</li>
              <li>Styling Lists, Tables, Forms</li>
              <li>FontAwesome</li>
              <li>Transitionals, Transformations, Animations</li>
              <li>Styling button</li>
              <li>Tool tip, Box Sizing, Flex, Grid</li>
              <li>Bootstrap containers</li>
              <li>Bootstrap Tables,Images, Colors</li>
              <li>Bootstrap Alerts, Buttons</li>
              <li>Bootstrap Spinners, Cards, Pagination, Drop Down</li>
              <li>Bootstrap Corousel</li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>Javascript</p>
                <span>Week 3-4</span>
              </div>
              <p className="content-text">
              Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and complete Javascript.


              </p>
            </div>
            <div
              className={
                val === 2
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 2 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(2)}>View Details</button>
              )}
            </div>
          </div>
          {val === 2 ? (
            <ul className="syllabusList">
              <li>Introduction to Javascript</li>
              <li>Variables, scoping, Data type</li>
              <li>Strings and Numbers</li>
              <li>Operators and loops</li>
              <li>Functions</li>
              <li>Arrays and Objects</li>
              <li>Data Structures - List, Stack, Queues, Maps</li>
              <li>Hashing</li>
              <li>Understanding and working with DOM</li>
              <li>Developer tools in Browsers</li>
              <li>Prototypes</li>
              <li>Closures</li>
              <li>Browser Local Storage</li>
              <li>Jquery, Ajax</li>
              <li>Promises</li>
              <li>ES5 vs ES6 vs ES7</li>
              <li>Eventloop in Javascript</li>
            </ul>
          ) : (
            ""
          )}
        

        <div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>ReactJS</p>
                <span>Week 5-7</span>
              </div>
              <p className="content-text">
              Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React is better, and don't just learn, build amazing web apps using react.
              </p>
            </div>
            <div
              className={
                val === 3
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 3 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(3)}>View Details</button>
              )}
            </div>
          </div>
          {val === 3 ? (
            <ul className="syllabusList">
              <li>React Intro</li>
              <li>Node installation</li>
              <li>Create an app using create-react-app</li>
              <li>Understanding basics of react app</li>
              <li>Understanding JSX</li>
              <li>Understanding virtual DOMS , Single page apps</li>
              <li>React Lifecycle</li>
              <li>States, class components vs functional components</li>
              <li>Event handling, props</li>
              <li>Building forms in React</li>
              <li>Routes</li>
              <li>Conditional Rendering</li>
              <li>Pure Components</li>
              <li>High order components</li>
              <li>Controlled vs Uncontrolled components</li>
              <li>Redux</li>
              <li>Babel, Webpack</li>
              <li>Axios, Creating a mock server</li>
              <li>SASS overview</li>
            </ul>
          ) : (
            ""
          )}

<div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>NodeJs</p>
                <span>Week 7-9</span>
              </div>
              <p className="content-text">
              Always thinking about how to build servers? Its time to build one. Learn about express, security, authentication, restricting routes, hashing passwords, and JWT’s, and much more.
              </p>
            </div>
            <div
              className={
                val === 4
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 4 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(4)}>View Details</button>
              )}
            </div>
          </div>
          {val === 4 ? (
            <ul className="syllabusList">
              <li>Creating a Simple Server</li>
              <li>Response types - HTML, JSON</li>
              <li>Routing</li>
              <li>Express Introduction</li>
              <li>Intergrate Frontend and Backend</li>
              <li>Express Params and Query String</li>
              <li>Express Middleware</li>
              <li>API Authentication</li>
              <li>JWT Token, Passport.js</li>
              <li>Socket Programming</li>
            </ul>
          ) : (
            ""
          )}

<div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>Databases - MongoDB</p>
                <span>Week 10</span>
              </div>
              <p className="content-text">
              Want to know how companies manage all their Data and how on a click of a button all the data is there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB.
              </p>
            </div>
            <div
              className={
                val === 5
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 5 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(5)}>View Details</button>
              )}
            </div>
          </div>
          {val === 5 ? (
            <ul className="syllabusList">
              <li>SQL vs NOSQL</li>
              <li>MongoDB overview</li>
              <li>Installing MongoDB</li>
              <li>Connecting and Inserting Data</li>
              <li>Deleting and updating Data</li>
              <li>Understanding CRUD operations</li>
            </ul>
          ) : (
            ""
          )}


<div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>Code Review + Deployment</p>
                <span>Week 11</span>
              </div>
              <p className="content-text">
              Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the world.
              </p>
            </div>
            <div
              className={
                val === 6
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 6 ? (
                <button onClick={() => setVal(0)}>Hide</button>
              ) : (
                <button onClick={() => setVal(6)}>View Details</button>
              )}
            </div>
          </div>
          {val === 6 ? (
            <ul className="syllabusList">
              <li> Tools for Code review</li>
              <li> Understand Review Board</li>
              <li> Understanding Firebase</li>
              <li> Github</li>
              <li> Deploy using Netlify and Github</li>
              <li> Get code review by Software Developers</li>
              <li> Deploy all the projects</li>
            </ul>
          ) : (
            ""
          )}

<div className="syllabus-content">
            <div className="syllabus-content-top">
              <div>
                <p>Projects</p>
                <span>Week 12-16</span>
              </div>
              <p className="content-text">
              You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.
              </p>
            </div>
            <div
              className={
                val === 0
                  ? "syllabus-content-bottom bg"
                  : "syllabus-content-bottom"
              }
            >
              <p className="text">Course Details</p>
              {val === 7 ? (
                <button onClick={() => setVal(0)}>View Details</button>
              ) : (
                <button onClick={() => setVal(7)}>Hide</button>
              )}
            </div>
          </div>
          {val === 0 ? (
            <div className="projects">
                <div className="project-card">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/HTML_HTML.svg" alt="project"/>
                        <h1>HTML Blog Page</h1>
                        <p>Start your web development by making a simple blog page using HTML.</p>
                </div>
                <div className="project-card">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/Clock.svg" alt="project"/>
                        <h1>Reminder Clock App</h1>
                        <p>Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS</p>
                </div>
                <div className="project-card">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_todo.svg" alt="project"/>
                        <h1>ToDo App</h1>
                        <p>This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.</p>
                </div>
                <div className="project-card">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_blog.svg" alt="project"/>
                        <h1>React Blog App</h1>
                        <p>Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.</p>
                </div>
                <div className="project-card">
                        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_shopping.svg" alt="project"/>
                        <h1>E-commerce Web App</h1>
                        <p>This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.</p>
                </div>
              
            </div>
          ) : (
            ""
          )}


          

        </div>  
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 1rem 4rem;
  background: #f7f9fb;

  .syllabus {
    margin: 8rem auto;
  }
  .syllabus-top-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: rgba(10, 45, 71, 0.9294117647058824);
      font-size: 30px;
    }
    button {
      background: transparent;
      box-shadow: 0 3px 6px rgba(95, 141, 196, 0.2);
      border-radius: 5px;
      color: #ff219f;
      border: 1px solid #ff219f;
      padding: 14px 51px 13px 50px;
      font-weight: 400;
      cursor: pointer;
      text-align: center;
      font-size: 18px;
    }
  }
  .text {
    width: 60%;
    text-align: left;
    font-size: 2rem;

    color: rgba(106, 127, 134, 0.9294117647058824);
  }
  .stack-syllabus {
    margin: 4rem 0;
  }
  .syllabus-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .syllabus-content-top {
      color: #fff;
      padding: 2rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: linear-gradient(
        89deg,
        rgba(45, 111, 162, 0.8862745098039215),
        rgba(2, 9, 14, 0.9294117647058824)
      );

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 2rem;
        }

        span {
          font-size: 1.5rem;
          color: orange;
          padding: 1rem 2rem;
          border: 2px solid orange;
          border-radius: 2rem;
        }
      }
      .content-text {
        font-size: 1.7rem;
        text-align: left;
        width: 60%;
        font-weight: 200;
        line-height: 2.4rem;
      }
    }

    .syllabus-content-bottom {
      display: flex;
      padding: 2rem;
      justify-content: space-between;
      box-shadow: 0 3px 6px rgba(75, 140, 232, 0.10196078431372549);
      letter-spacing: 0.16px;
      align-items: center;
      background: #fff;
      color: #72839c;
      font-size: 16px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      button {
        padding: 1rem 2.5rem;
        color: rgba(10, 45, 71, 0.9294117647058824);
        border: none;
        font-size: 1.9rem;
        border-radius: 8px;
      }
    }
    .bg {
      background: linear-gradient(
        89deg,
        rgba(45, 111, 162, 0.8862745098039215),
        rgba(2, 9, 14, 0.9294117647058824)
      );
      p {
        color: white;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    li {
      width: 50%;
      font-size: 1.5rem;
      color: gray;
      text-align: left;
      padding: 1rem 4rem;
    }
    li::before {
      content: ">";
      font-size: 2rem;
      color: orange;
      margin-right: 1rem;
    }
  }
  .projects{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    padding: 2rem;
    .project-card{
        background: transparent linear-gradient(180deg,#d0dee9,#fff) 0 0 no-repeat padding-box;
        box-shadow: 0 10px 30px rgba(208,222,233,.41568627450980394);
        padding:1.5rem 2rem;
        width:33rem;
        border-radius:2rem;
        margin:2rem 0;
        img{
            width:15rem;
            margin:2rem 0;
        }
        h1{
            color:rgba(10,45,71,.9294117647058824);
            font-size:2rem;
            margin-bottom:2rem;
        }
        p{
            color:rgba(106,127,134,.9294117647058824);
            font-size:2rem;
            margin-bottom:6rem;
            
        }
    }
  }
`;

export default FullstackSyllabus;
