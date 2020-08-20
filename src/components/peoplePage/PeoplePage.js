import React, { Component } from 'react';

import ItemList from '../itemList/ItemList';
import PersonDetails from '../personDetails/PersonDetails';

import './PeoplePage.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    const { selectedPerson } = this.state;
    const { getData } = this.props;

    return (
      <div className="d-flex mb2">
        <div className="col-md-6">
          <ItemList getData={getData} onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
