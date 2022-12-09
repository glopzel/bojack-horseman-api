import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Intro from "./components/Intro";
import Characters from "./components/Characters";
import Seasons from "./components/Seasons";
import { atomOneLight } from "react-code-blocks";
import introCode from "./components/codeExamples/introCode";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />

          <Route
            path="/intro"
            element={
              <>
                <Intro
                  text={introCode.getCode}
                  language={"js"}
                  theme={atomOneLight}
                  showLineNumbers={false}
                />
              </>
            }
          />

          <Route
            path="/characters"
            element={
              <>
                <Characters
                  language={"js"}
                  theme={atomOneLight}
                  showLineNumbers={false}
                />
              </>
            }
          />

          <Route
            path="/seasons"
            element={
              <>
                <Seasons language={'js'} theme={atomOneLight} showLineNumbers={false}/>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
