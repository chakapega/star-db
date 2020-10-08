import React, { Component } from 'react';

import Row from '../row/Row';
import { PlanetList } from '../swComponents/ItemsLists';
import PlanetDetails from '../swComponents/PlanetDetails';

export default class PlanetPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
