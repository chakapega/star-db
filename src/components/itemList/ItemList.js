import React, { Component } from 'react';

import Spinner from '../spinner/Spinner';

import './ItemList.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => this.setState({ itemList }));
  }

  renderItems = itemList => {
    const { onItemSelected } = this.props;

    return itemList.map(item => {
      const { id, name } = item;

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
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
