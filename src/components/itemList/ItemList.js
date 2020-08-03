import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/Spinner';

import './ItemList.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList }));
  }

  renderItems = peopleList => {
    const { onItemSelected } = this.props;

    return peopleList.map(person => {
      const { id, name } = person;

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
