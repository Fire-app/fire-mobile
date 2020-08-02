import React from 'react';
import KnowYourRightsTemplate from './Template';

const PublicTransport = () => (
  <KnowYourRightsTemplate
    warning={{
      title: 'Do not run or speak.',
      subtitle:
        'Remember, you have the right to remain silent! If you speak, do not lie.',
    }}
    tips={['Present your rights card.', 'Do not sign anything.', 'Do not lie.']}
  />
);

export default PublicTransport;
