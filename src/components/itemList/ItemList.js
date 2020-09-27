import React from 'react';
import SwapiService from '../../services/SwapiService';

import withData from '../hoc-helpers/withData';

import './ItemList.css';

const ItemList = props => {
  const { data, onItemSelected, children } = props;
  const items = data.map(item => {
    const { id } = item;
    const label = children(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

const { getData } = new SwapiService();

export default withData(ItemList, getData);
