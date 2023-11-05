import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
        font-family: "Work Sans", sans-serif;
    }
    html{
        font-size:62.5%;
        overflow-x:hidden;
    }
    body{
        height:100vh;
        overflow-x:hidden;

    }
    .loading{
        font-size: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
     
    }
    a {
        text-decoration: none;
      }
      
      li {
        list-style: none;
      }
      h1{
        font-size:1.7rem;
        font-weight:100;
        text-transform:uppercase;
      }

      .container{
        width:88vw;
        margin:0 auto;
      
      }
      .flex{
        display:flex;
       
      }
      .flex-column{
        flex-direction:column;
      }
      .grid{
        display:grid;
        gap:0 10rem;
      }
      .grid-three-column{
        grid-template-columns:0.7fr 1fr  0.7fr;
      }
     .grid-two-column{
      grid-template-columns:repeat(2, 1fr)
     }


     @media only screen and (max-width:${({theme})=>theme.media.mobile}){
      
      .container{
        width:90vw;
        margin:0 auto;
      }
      .grid{
        gap:0;
      }

     }
   
     @media only screen and (min-width:541px) and (max-width:${({theme})=>theme.media.tab}){
      .container{
        width:90vw;
      }
     }


`