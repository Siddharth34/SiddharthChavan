import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TitlePage from "./Components/TitlePage";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ContextTheme from "./Context/ContextTheme";
import ThemeToggler from "./Components/ThemeToggler";
import {Helmet} from "react-helmet";

const App = () => {
  const hook = useState("light");
  return (
    <>
    <Helmet>
                  <meta charSet="utf-8" />
                  <title>Portfolio | Siddharth Chavan</title>
                  <link rel="canonical" href="http://mysite.com/example" />
                  <meta name="description" content="Portfolio" />
    </Helmet>

      <ContextTheme.Provider value={hook}>
        <ThemeToggler />
        <TitlePage />
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </ContextTheme.Provider>
    </>
  );
};

export default App;
