import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import USNews from "./Components/USNewsComponent/usNewsComponent";
import HomeContainer from "./Components/homeComponent/homeContainer";
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
