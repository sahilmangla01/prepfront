import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import RouteComponent from "./Router/RouteComponent";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const theme = {
    colors:{
      bg:"#CAEDFF",
      
    },
    media:{
      mobile:"540px",
      tab:"990px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <RouteComponent/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
