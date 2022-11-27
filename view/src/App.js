import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing';
import Intro from './components/Intro';
import Characters from './components/Characters';
import Seasons from './components/Seasons';
import { atomOneLight } from "react-code-blocks";
import introCode from './codeExamples/introCode';
import characterCode from './codeExamples/characterCode';

// let introCode = `{
//   "characters": "https://bojack-horseman-api.onrender.com/api/characters/{character name}",
//   "species": "https://bojack-horseman-api.onrender.com/api/characters/species/{character species}",
//   "voice": "https://bojack-horseman-api.onrender.com/api/characters/voice/{voice person name}",
//   "seasons": "https://bojack-horseman-api.onrender.com/api/seasons/{number 1 - 6}"
// }`
// let characterCode = `{
//   "_id": "62a978fbc39257f9bf963651",
//   "name": "Bojack Horseman",
//   "voice": "Will Arnett",
//   "species": "Horse",
//   "aliases": [
//       "BoJ",
//       "BJ",
//       "Chadwick Boseman",
//       "BJ Novak",
//       "BoJangles",
//       "JockJam DoorSlam",
//       "Hambone Fakenamington",
//       "BoBo the Angsty Zebra",
//       "Horse Guy",
//       "Horse Professor",
//       "Dead Body #4"
//   ],
//   "first appearance": "BoJack Horseman: The BoJack Horseman Story, Chapter One",
//   "last appearance": "Nice While It Lasted",
//   "filmography": [
//       "Secretariat",
//       "Horsin' Around",
//       "The BoJack Horseman Show",
//       "Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out! (HSAC!WDTK?DTKT??LFO!)",
//       "Ethan Around",
//       "Felicity Huffman's Booty Academy: Los Angeles",
//       "Philbert"
//   ],
//   "occupation": [
//       "Drama Professor at Wesleyan University (formerly)",
//       "actor",
//       "owner of the restaurand Elephante (formerly)",
//       "amateur standup comedian (formerly=",
//       "bartender at elefanté (formerly="
//   ]
// }`

function App() {

  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path="/" element = {
              <>
              <Landing />
              </>
            }/>

            <Route 
              path="/intro"
              element={
                <>
                  <Intro text={introCode.getCode}
                  language={'js'} theme={atomOneLight} showLineNumbers={false}/>
                </>
              }
            />

            <Route path="/characters" element= {
            <>
              <Characters text={characterCode.getCode} language={'js'} theme={atomOneLight} showLineNumbers={false}/>
            </>
          } />

          <Route path='/seasons' element={
            <>
              <Seasons />
            </>
          }/>
          </Routes>
        </Router>
        <h1>test</h1>
      <Footer />
    </div>
  );
}

export default App;
