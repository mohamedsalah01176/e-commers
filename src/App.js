import Header1 from './Component/Header/Header1';
import Header2 from './Component/Header/Header2';
import Header3 from './Component/Header/Header3';
// import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ColorModeContext, UseMode } from './Component/Them';
import Hero from './Component/Hero/Hero';
import IconSection from './Component/Hero/IconSection';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import Scrool from './Component/button/Scrool';
// import { Outlet } from "react-router-dom";


function App() {
  const [theme,colorMode]=UseMode()
  return (
    <div>
      {/* <BrowserRouter> */}
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              
            <Header1/>
            <Header2/>
            <Header3/>
            <Hero/>
            <IconSection/>
            <Main/>
            <Footer/>
            <Scrool/>
              {/* <Outlet/> */}
            </CssBaseline>
          </ThemeProvider>
        </ColorModeContext.Provider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
