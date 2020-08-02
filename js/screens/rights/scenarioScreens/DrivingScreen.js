import React from 'react';
import KnowYourRightsTemplate from './Template';

const DrivingScreen = () => (
  <KnowYourRightsTemplate
    warning={{
      title: 'Do not drive away.',
      subtitle: 'Stay calm and do not open your car door.',
    }}
    tips={[
      'Do not open your car door.',
      'Tell the ICE agent that you want to remain silent. If you speak, do not lie.',
      'Call your attorney while in the car.',
      "Do not present your driver's license or any other identifications.",
      'Do not sign any documents or answer questions without an attorney present. ',
    ]}
  />
);

export default DrivingScreen;
