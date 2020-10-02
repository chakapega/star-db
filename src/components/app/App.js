import React, { Component } from 'react';

import ErrorBoundry from '../errorBoundry/ErrorBoundry';
import Header from '../header/Header';
import SwapiService from '../../services/SwapiService';
import {
  PersonList,
  PlanetList,
  StarshipList,
} from '../swComponents/ItemsLists';
import PersonDetails from '../swComponents/PersonDetails';
import PlanetDetails from '../swComponents/PlanetDetails';
import StarshipDetails from '../swComponents/StarshipDetails';
import { SwapiServiceProvider } from '../swapiServiceContext/SwapiServiceContext';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />
            <PersonList />
            <PlanetList />
            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
