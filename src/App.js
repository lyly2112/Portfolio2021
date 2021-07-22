import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About"
import Work from "./components/Work"
import Footer from "./components/Footer"


import './App.scss';

//import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
