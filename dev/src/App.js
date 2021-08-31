import React, { Component } from "react";
import './App.css';

import Header from "./Components/Header";
import Repositorys from "./Components/Repositorys";

class App extends Component {

  render() {

    return ( 
        <div className="App">
          <Header />
          <Repositorys />                        
        </div> 
    );
  }
}

export default App;