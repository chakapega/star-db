import React, { Component } from 'react';

import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import PeoplePage from '../peoplePage/PeoplePage';
import SwapiService from '../../services/SwapiService';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
      </div>
    );
  }
}

export default App;
