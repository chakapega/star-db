import React, { Component } from 'react';

import Row from '../row/Row';
import { StarshipList } from '../swComponents/ItemsLists';
import StarshipDetails from '../swComponents/StarshipDetails';

export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
