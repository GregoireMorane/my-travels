import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Travel
            destination="New York"
            country="United States"
            image="https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg"
            distance="5834 km"
        />
        <Travel
            destination="Copenhagen"
            country="Denmark"
            image="http://tetu.com/content/uploads/2016/07/Sans-titre-2-10.jpg"
            distance="1215 km"
        />
      </div>
    );
  }
}

export default App;
