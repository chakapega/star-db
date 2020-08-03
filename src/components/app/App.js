import React, { Component } from 'react';

import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import ItemList from '../itemList/ItemList';
import PersonDetails from '../personDetails/PersonDetails';

import './App.css';

class App extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson } = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="mb2 d-flex">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
