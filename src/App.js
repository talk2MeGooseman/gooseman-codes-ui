import React, { Component } from 'react';
import Header from './components/header';
import Projects from "./components/Projects";
import LearningResoures from "./components/LearningResources";
import Footer from "./components/Footer";
import About from "./components/About";

import TwitchVideo from "react-twitch-embed-video";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TwitchVideo channel="talk2megooseman" width="100%" layout="video" />
        <About />
        {/* <ClipsCoursel /> */}
        <Projects />
        <LearningResoures />
        <Footer/>
      </div>
    );
  }
}

export default App;
