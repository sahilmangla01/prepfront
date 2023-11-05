import React,{useState} from 'react'
import styled from 'styled-components'
import {BsPlusLg} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";

const ElevationSyllabus = () => {
    const[value,setValue]=useState(0)
  return (
    <Wrapper>
        <div className='container'>
        <h1>Program Syllabus</h1>
        <p>Learn from the best and be prepared to crack full stack</p>
        <p>developer jobs</p>

        <div className='syllabus-main '>
            <div className='syllabus syllabus1'>
                <p>1st Week - 4th Week</p>
            </div>
            <div className='syllabus-content bleft1'>
                <div className='flex'>
                    <div className='number border1'>
                        <p className='syllabus1'>1</p>
                    </div>
                    <h2>Frontend Development Basics</h2>
                </div>
                {
                    value===1?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color1'/>:<BsPlusLg onClick={()=>setValue(1)} className='icon color1'/>
                }
            </div>
            {
                value===1
                ?<div className='bleft1 syllabus-list'>
                <p>Frontend Development Basics - HTML, CSS AND Github</p>
                <ul>
                    <li className='border1'>How websites work</li>
                    <li className='border1'>Web Development Overview - Advantages</li>
                    <li className='border1'>HTML Introduction</li>
                    <li className='border1'>Structure of Webpage</li>
                    <li className='border1'>HTML Tags</li>
                    <li className='border1'>Texts, Images, Videos</li>
                    <li className='border1'>Lists, Forms, Tables</li>
                    <li className='border1'>Links, Anchor tags</li>
                    <li className='border1'>HTML Divs</li>
                    <li className='border1'>Github</li>
                    <li className='border1'>CSS Introduction</li>
                    <li className='border1'>Inline vs Internal vs External styling</li>
                    <li className='border1'>CSS Display</li>
                    <li className='border1'>CSS Font Styling, background, margin, padding</li>
                    <li className='border1'>Styling Lists, Tables, Forms</li>
                    <li className='border1'>FontAwesome</li>
                    <li className='border1'>Transitionals, Transformations, Animations</li>
                    <li className='border1'>Styling button</li>
                    <li className='border1'>Tool tip, Box Sizing, Flex, Grid</li>
                    <li className='border1'>Projects</li>
                </ul>

            </div>: ""
            }
        </div>

        <div className='syllabus-main'>
            <div className='syllabus syllabus2'>
                <p>5th Week - 8th Week</p>
            </div>
            <div className='syllabus-content bleft2'>
                <div className='flex'>
                    <div className='number border2'>
                        <p className='syllabus2'>2</p>
                    </div>
                    <h2>Javascript Fundamentals & Problem Solving</h2>
                </div>
                {value===2?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color2'/>:<BsPlusLg onClick={()=>setValue(2)} className='icon color2'/>}
            </div>
            {
                value===2
                ?<div className='bleft2 syllabus-list'>
                <p>Javascript Fundamentals & Problem Solving</p>
                <ul>
                    <li className='border2'>Introduction to JavaScript</li>
                    <li className='border2'>Variables, scoping, Data type</li>
                    <li className='border2'>Logic Building</li>
                    <li className='border2'>Strings and Numbers</li>
                    <li className='border2'>Operators and loops</li>
                    <li className='border2'>Functions</li>
                    <li className='border2'>Arrays and Objects</li>
                    <li className='border2'>Data Structures - Stack, Queues, Maps, Sets</li>
                    <li className='border2'>Searching and Sorting Algorithms</li>
                    <li className='border2'>Problem Solving</li>
                    
                </ul>

            </div>: ""
            }
        </div>
        <div className='syllabus-main'>
            <div className='syllabus syllabus2'>
                <p>9st Week - 12th Week</p>
            </div>
            <div className='syllabus-content bleft2'>
                <div className='flex'>
                    <div className='number border2'>
                        <p className='syllabus2'>3</p>
                    </div>
                    <h2>Building Websites using JS</h2>
                </div>
                {value===3?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color2'/>:<BsPlusLg onClick={()=>setValue(3)} className='icon color2'/>}
            </div>
            {
                value===3
                ?<div className='bleft2 syllabus-list'>
                <p>Building Websites using JS</p>
                <ul>
                    <li className='border2'>Understanding and working with DOM</li>
                    <li className='border2'>Modifying Website Elements with JS</li>
                    <li className='border2'>Developer tools in Browsers</li>
                    <li className='border2'>Prototypes</li>
                    <li className='border2'>Closures</li>
                    <li className='border2'>Browser Local Storage</li>
                    <li className='border2'>Jquery, Ajax</li>
                    <li className='border2'>Promises</li>
                    <li className='border2'>ES5 vs ES6 vs ES7</li>
                    <li className='border2'>Eventloop in Javascript</li>
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus3'>
                <p>13st Week - 16th Week</p>
            </div>
            <div className='syllabus-content bleft3'>
                <div className='flex'>
                    <div className='number border3'>
                        <p className='syllabus3'>4</p>
                    </div>
                    <h2>React</h2>
                </div>
                {value===4?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color3'/>:<BsPlusLg onClick={()=>setValue(4)} className='icon color3'/>}
            </div>
            {
                value===4
                ?<div className='bleft3 syllabus-list'>
                <p>React</p>
                <ul>
                    <li className='border3'>React Intro</li>
                    <li className='border3'>Node installation</li>
                    <li className='border3'>Create an app using create-react-app</li>
                    <li className='border3'>Understanding basics of react app</li>
                    <li className='border3'>Understanding JSX</li>
                    <li className='border3'>Understanding virtual DOMS , Single page apps</li>
                    <li className='border3'>React Lifecycle</li>
                    <li className='border3'>States, class components vs functional components</li>
                    <li className='border3'>Event handling, props</li>
                    <li className='border3'>Building forms in React</li>
                    <li className='border3'>Routes</li>
                    <li className='border3'>Conditional Rendering</li>
                    <li className='border3'>Pure Components</li>
                    <li className='border3'>High order components</li>
                    <li className='border3'>Controlled vs Uncontrolled components</li>
                    <li className='border3'>React Hooks</li>
                    <li className='border3'>Redux</li>
                    <li className='border3'>Babel, Webpack</li>
                    <li className='border3'>Axios, Creating a mock server</li>
                    <li className='border3'>SASS overview</li>
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus1'>
                <p>17st Week - 19th Week</p>
            </div>
            <div className='syllabus-content bleft1'>
                <div className='flex'>
                    <div className='number border1'>
                        <p className='syllabus1'>5</p>
                    </div>
                    <h2>NodeJS</h2>
                </div>
                {value===5?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color1'/>:<BsPlusLg onClick={()=>setValue(5)} className='icon color1'/>}
            </div>
            {
                value===5
                ?<div className='bleft1 syllabus-list'>
                <p>Node JS</p>
                <ul>
                    <li className='border1'>Creating a Simple Server</li>
                    <li className='border1'>Response types - HTML, JSON</li>
                    <li className='border1'>Routing</li>
                    <li className='border1'>Express Introduction</li>
                    <li className='border1'>Intergrate Frontend and Backend</li>
                    <li className='border1'>Express Params and Query String</li>
                    <li className='border1'>Express Middleware</li>
                    <li className='border1'>API Authentication</li>
                    <li className='border1'>JWT Token, Passport.js</li>
                    <li className='border1'>Socket Programming</li>
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus2'>
                <p>20st Week - 22nd Week</p>
            </div>
            <div className='syllabus-content bleft2'>
                <div className='flex'>
                    <div className='number border2 '>
                        <p className='syllabus2'>6</p>
                    </div>
                    <h2>Database</h2>
                </div>
                {value===6?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color2'/>:<BsPlusLg onClick={()=>setValue(6)} className='icon color2'/>}
            </div>
            {
                value===6
                ?<div className='bleft2 syllabus-list'>
                <p>Database</p>
                <ul>
                    <li className='border2'>SQL vs NOSQL</li>
                    <li className='border2'>MongoDB/ DynamoDB overview</li>
                    <li className='border2'>Installing MongoDB</li>
                    <li className='border2'>Connecting and Inserting Data</li>
                    <li className='border2'>Deleting and updating Data</li>
                    <li className='border2'>Understanding CRUD operations</li>
                    <li className='border2'>Understanding Firebase</li>
                   
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus3'>
                <p>23rd Week - 24th Week</p>
            </div>
            <div className='syllabus-content bleft3'>
                <div className='flex'>
                    <div className='number border3'>
                        <p className='syllabus3'>7</p>
                    </div>
                    <h2>Code Review & Deployment</h2>
                </div>
                {value===7?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color3'/>:<BsPlusLg onClick={()=>setValue(7)} className='icon color3'/>}
            </div>
            {
                value===7
                ?<div className='bleft3 syllabus-list'>
                <p>Code Review & Deployment</p>
                <ul>
                    <li className='border3'>Deploy using Netlify and Github</li>
                    <li className='border3'>Get code review by Software Developers</li>
                    <li className='border3'>Deploy all the projects</li>
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus3'>
                <p>25th Week - 28th Week</p>
            </div>
            <div className='syllabus-content bleft3'>
                <div className='flex'>
                    <div className='number border3'>
                        <p className='syllabus3'>8</p>
                    </div>
                    <h2>Interview Preparation & Major Projects</h2>
                </div>
                {value===8?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color3'/>:<BsPlusLg onClick={()=>setValue(8)} className='icon color3'/>}
            </div>
            {
                value===8
                ?<div className='bleft3 syllabus-list'>
                <p>Interview Preparation & Major Projects</p>
                <ul>
                    <li className='border3'>HTML Blog Page</li>
                    <li className='border3'>ToDo App</li>
                    <li className='border3'>Reminder Clock App</li>
                    <li className='border3'>React Blog Web App</li>
                    <li className='border3'>Portfolio Building</li>
                    <li className='border3'>Ecommerce Web App(Major Project)</li>
                    <li className='border3'>Online Assessement Platform(Major Project)</li>
                    <li className='border3'>Resume Building</li>
                    
                </ul>

            </div>: ""
            }
        </div><div className='syllabus-main'>
            <div className='syllabus syllabus2'>
                <p>28th Week Onwards</p>
            </div>
            <div className='syllabus-content bleft2'>
                <div className='flex'>
                    <div className='number border2'>
                        <p className='syllabus2'>9</p>
                    </div>
                    <h2>Interviews Opportunities</h2>
                </div>
                {value===9?<AiOutlineMinus onClick={()=>setValue(0)} className='icon color2'/>:<BsPlusLg onClick={()=>setValue(9)} className='icon color2'/>}
            </div>
            {
                value===9
                ?<div className='bleft2 syllabus-list'>
                <p>Interviews Opportunities with companies</p>
                

            </div>: ""
            }
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align:center;
        margin:9rem auto;
        
        

h1{
    font-size:3rem;
  font-weight:bold;
  color:#45474B;
  margin-bottom:1rem;
}
h2{
    font-size:2rem;
    font-weight:bold;
    color:#45474B;
    padding:1rem 0;
}
p{
    font-size:2rem;
  color:gray;
}

.syllabus-main{
    padding:3rem 0 0 ;
}
.syllabus{
    position:relative;
    padding:1.4rem;
    p{
        color:white;
    }
    p::after{
        content: "";
        position: absolute;
        top: 100%;
        height: 40px;
        bottom: 0;
        left: 50%;
        border-left: 0.25px solid hsla(0,0%,43.9%,.2);
        transform: translate(-50%);
    }
    
}



    .syllabus-content{
        margin:4rem 0 0.3px;
        display:flex;
        border:1px solid hsla(0,0%,43.9%,.2);
        border-top-left-radius:0.5rem;
        border-top-right-radius:0.5rem;
        padding:1.5rem 4rem;
        display:flex;
        justify-content:space-between;
        // text-align:left;
    }
    .syllabus1{
        background: rgb(247, 128, 119);
    }
    .color1{
        color:rgb(247, 128, 119);
    }
    .border1{
        border:2px solid rgb(247, 128, 119);
        
    }
    .bleft1{
        
        border-left:1rem solid rgb(247, 128, 119);
    }
    .syllabus2{
        background: rgb(101, 187, 229);
    }
    .color2{
        color:rgb(101, 187, 229);
    }
    .border2{
        border:2px solid rgb(101, 187, 229);
        
    }
    .bleft2{
        border-left:1rem solid rgb(101, 187, 229);
    }
    .syllabus3{
        background: rgb(247, 182, 67);
    }
    .color3{
        color:rgb(247, 182, 67);
    }
    .border3{
        border:2px solid rgb(247, 182, 67);
        
    }
    .bleft3{
       
        border-left:1rem solid rgb(247, 182, 67);
    }
    .number{
        padding:3px;
        border-radius:0.5rem;
        margin-right:2rem;
       p{
        color:white;
        padding:0.5rem 1rem;
        border-radius:0.5rem;
       }
    }
    .icon{
        font-size:3rem;
        font-weight:bold;
        background-color:#e8f7ed;
        border-radius:50%;

    }
    .syllabus-list{
        padding: 21px 44px 21px 17px;
        background: #f6f8ff;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        transition:all 3s ease;
        p{
            margin: 30px 5px;
            padding: 15px;
            background: #e8f7ed;
            text-align:left;
        }
        ul{
            display:flex;
            flex-wrap:wrap;
        }
        li{
            color: #858585;
            padding: 12px 8px;
            margin: 10px;
            background: #fff;
            font-size:2rem;
        }
    }

    @media only screen and (max-width:${({theme})=>theme.media.mobile}){
        h2{
            font-size:1.5rem;
            text-align:left;
        }
       
        .syllabus-content{
            padding:1.5rem ;
            align-items:center;
            div{
                width:80%;
                align-items:center;
                .number{
                    width:20%;
                }
            }
        }
    }

`

export default ElevationSyllabus
