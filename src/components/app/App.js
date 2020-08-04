import React, { Component } from 'react';

import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import PeoplePage from '../peoplePage/PeoplePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
