import React, { Component } from "react";
import "./App.css";
import "./RadioButton.css"

// components
import Display from "./components/Display.jsx";


class App extends Component {


  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
