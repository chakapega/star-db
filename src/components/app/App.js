import React, { Component } from 'react';

import ErrorBoundry from '../errorBoundry/ErrorBoundry';
import Header from '../header/Header';
// import Row from '../row/Row';
// import ItemDetails from '../itemDetails/ItemDetails';
import SwapiService from '../../services/SwapiService';
// import { Record } from '../itemDetails/ItemDetails';
import {
  PersonList,
  PlanetList,
  StarshipList,
} from '../swComponents/ItemsLists';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../swComponents/ItemsDetails';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;
    // const personDetails = (
    //   <ItemDetails getData={getPerson} getImageUrl={getPersonImage} itemId={11}>
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye color" />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     getData={getStarship}
    //     getImageUrl={getStarshipImage}
    //     itemId={5}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />
          {/* <RandomPlanet /> */}
          {/* <PeoplePage getData={this.swapiService.getAllPeople} /> */}
          {/* <Row left={personDetails} right={starshipDetails} /> */}
          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
