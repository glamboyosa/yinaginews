import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes/routes";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
        <div className="App">{/* <USNews /> */}</div>
      </Router>
    );
  }
}

export default App;
