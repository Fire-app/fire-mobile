import React from 'react';
import KnowYourRightsTemplate from './Template';

const InsideHomeScreen = () => (
  <KnowYourRightsTemplate
    warning={{
      title: 'Present your rights card and remain silent.',
      subtitle: 'You have the right to remain silent!',
    }}
    scenarioBullets={{
      title: 'Tell the agent(s) if...',
      bullets: [
        'children or elderly are present',
        'you are ill, on medication, nursing, or pregnant',
        'you need to arrange care for someone',
      ],
    }}
    scenarioItems={[
      {
        title: "Agents don't have a signed warrant?",
        subtitle: 'Say "I deny consent to search my home."',
      },
    ]}
    tips={[
      'Do not resist arrest.',
      'Do not give false documents.',
      'Do not lie.',
    ]}
  />
);

export default InsideHomeScreen;
