import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Login from '../Components/Login-Signup/Login'
import Register from '../Components/Login-Signup/Register'
import MockTest from '../Components/StudyMaterial/MockTest'
import VideoTutorial from '../Components/StudyMaterial/VideoTutorial'
import MCP from '../Components/CoursesAndProgram.js/MCP'
import FullstackProgram from '../Components/CoursesAndProgram.js/FullstackProgram'
import Project from '../Components/Projects/Project'
import ElevationAcademy from '../Components/Elevation Academy/ElevationAcademy'
import Dashboard from '../Components/DashBoard.js/Dashboard'



const RouteComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mock-test' element={<MockTest/>}></Route>
        <Route path='/video-tutorial' element={<VideoTutorial/>}></Route>
        <Route path='/master-competitive-programming' element={<MCP/>}></Route>
        <Route path='/full-stack-program' element={<FullstackProgram/>}></Route>
        <Route path='/elevation-academy' element={<ElevationAcademy/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/:id' element={<Project/>}></Route>
    </Routes>
  )
}

export default RouteComponent
