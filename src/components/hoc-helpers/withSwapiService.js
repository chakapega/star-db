import React from 'react';
import { SwapiServiceConsumer } from '../swapiServiceContext/SwapiServiceContext';

const withSwapiService = Wrapped => {
  return props => (
    <SwapiServiceConsumer>
      {swapiService => {
        return <Wrapped {...props} swapiService={swapiService} />;
      }}
    </SwapiServiceConsumer>
  );
};

export default withSwapiService;
