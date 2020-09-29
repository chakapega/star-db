import React from 'react';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();
const {
  getPerson,
  getPersonImage,
  getPlanet,
  getPlanetImage,
  getStarship,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getPerson}
      getImageUrl={getPersonImage}
      itemId={itemId}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getPlanet}
      getImageUrl={getPlanetImage}
      itemId={itemId}
    >
      <Record field="popilation" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getData={getStarship}
      getImageUrl={getStarshipImage}
      itemId={itemId}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
