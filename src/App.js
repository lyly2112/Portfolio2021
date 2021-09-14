import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"




//import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
