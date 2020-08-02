import React from 'react';
import KnowYourRightsTemplate from './Template';

const HomeArrestScreen = () => (
  <KnowYourRightsTemplate
    warning={{
      title: 'Remain silent and wait to speak to an attorney.',
      subtitle: 'Do not sign anything without a lawyer.',
    }}
    tips={[
      'Do not resist arrest.',
      'Do not provide any information.',
      'Do not sign anything. ',
    ]}
  />
);

export default HomeArrestScreen;
