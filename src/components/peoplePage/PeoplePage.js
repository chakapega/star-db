import React, { Component } from 'react';

import ItemList from '../itemList/ItemList';
import ItemDetails from '../itemDetails/ItemDetails';
import ErrorBoundry from '../errorBoundry/ErrorBoundry';
import Row from '../row/Row';

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
    const itemList = (
      <ItemList getData={getData} onItemSelected={this.onPersonSelected}>
        {({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      </ItemList>
    );
    const personDetails = <ItemDetails itemId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} rigth={personDetails} />
      </ErrorBoundry>
    );
  }
}
