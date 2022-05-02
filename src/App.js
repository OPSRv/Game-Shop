import React, { useState } from "react";
import Header from "./components/Header/Header";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import NewReleased from "./components/NewReleased/NewReleased";
import PopularGame from "./components/PopularGame/PopularGame";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Slider from "./components/Slider/Slider";
import styled from "styled-components";
import "./index.css";
import { ThemeContext, ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { DarkTheme, LightTheme } from "./styles/index";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColorLeftSidebar};
  }
`;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 326px;
  justify-items: stretch;
  align-items: stretch;
  background-color: ${(props) => props.theme.backgroundColorLeftSidebar};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 40px 0px 0px 40px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1px 10px;
`;

// #при оновленні localStorage
// #покрасити root
// #animation

const App = () => {
  const [theme, toggleTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
          <AppWrapper>
            <LeftSideBar />
            <MainWrapper>
              <Header />
              <Slider />
              <PopularGame />
              <NewReleased />
            </MainWrapper>
            <RightSidebar />
          </AppWrapper>
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
