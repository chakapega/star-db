import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../errorBoundry/ErrorBoundry';
import { SwapiServiceProvider } from '../swapiServiceContext/SwapiServiceContext';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import PeoplePage from '../pages/PeoplePage';
import PlanetPage from '../pages/PlanetPage';
import StarshipPage from '../pages/StarshipPage';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
