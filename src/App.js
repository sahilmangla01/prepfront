import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import RouteComponent from "./Router/RouteComponent";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HelpLine from "./Components/Footer/HelpLine";
function App() {
  const theme = {
    colors:{
      bg:"#CAEDFF",
      
    },
    media:{
      mobile:"540px",
      tab:"1250px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <RouteComponent/>
      <Footer/>
      <HelpLine/>
    </ThemeProvider>
  );
}

export default App;
