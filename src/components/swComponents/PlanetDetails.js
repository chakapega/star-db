import React from 'react';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
import withSwapiService from '../hoc-helpers/withSwapiService';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

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

export default withSwapiService(PlanetDetails);
