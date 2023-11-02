import React, {  useContext, useReducer,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
import reducer from '../ContextReducer.js/Reducer';
export const store = createContext();


const initialState ={
    isLoading:false,
    mock:[],
    video:[],
    other:[],
    project:[],
}

const ContextApi = ({children}) => {

    const [state , dispatch] = useReducer(reducer,initialState)

    const mockData = async(url)=>{
        dispatch({type:"Loading"})
        try {
            const res = await axios.get(url);
            const mock = res.data;
            dispatch({type:"Mock Data", payload:mock})
        } catch (error) {
            dispatch({type:"Error"})
        }
    }

    const videoData = async(url)=>{
        dispatch({type:"Loading"})
        try {
            const res = await axios.get(url);
            const video = res.data;
            dispatch({type:"Video Data", payload:video})
        } catch (error) {
            dispatch({type:"Error"})
        }
    }
    
    const otherData = async(url)=>{
        dispatch({type:"Loading"})
        try {
            const res = await axios.get(url);
            const other = res.data;
            dispatch({type:"Other Data", payload:other})
        } catch (error) {
            dispatch({type:"Error"})
        }
    }

    const projectData = async(url)=>{
        dispatch({type:"Loading"})
        try {
            const res = await axios.get(url);
            const project = res.data;
            dispatch({type:"Project Data", payload:project})
        } catch (error) {
            dispatch({type:"Error"})
        }
    }
    useEffect(()=>{
        mockData("https://prep-clone.onrender.com/api/getMockData");
        videoData("https://prep-clone.onrender.com/api/getvideodata");
        otherData("https://prep-clone.onrender.com/api/getotherdata");
        projectData("https://prep-clone.onrender.com/api/getprojectdata")

      },[])

   

  return (
    <store.Provider value={{...state}}>{children}</store.Provider>
  )
}

 export const ContextProvider = ()=>{
    return useContext(store)
}


export default ContextApi


