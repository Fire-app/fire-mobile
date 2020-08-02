import React from 'react';
import KnowYourRightsTemplate from './Template';

const OutsideHomeScreen = () => (
  <KnowYourRightsTemplate
    warning={{
      title: 'Do not open the door.',
      subtitle: 'You can talk to the agent through the door if necessary.',
    }}
    scenarioItems={[
      {
        title: "Agents won't leave?",
        subtitle: 'Call your attorney or the emergency hotline.',
      },
      {
        title: 'Agents looking for a loved one?',
        subtitle: 'Do not provide any information.',
      },
    ]}
    tips={[
      'Do not open the door.',
      'Do not lie.',
      'Do not provide any information.',
    ]}
  />
);

export default OutsideHomeScreen;
