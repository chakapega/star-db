import React from 'react';
import ItemList from '../itemList/ItemList';
import withData from '../hoc-helpers/withData';
import withSwapiService from '../hoc-helpers/withSwapiService';

const withChildFunction = fn => Wrapped => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFunction(renderNameAndModel)(ItemList))
);

export { PersonList, PlanetList, StarshipList };
