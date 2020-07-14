import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MainTabs from './MainTabs';
import OnboardingStack from './OnboardingStack';

const Navigation = () => {
  const { complete: onboardingComplete } = useSelector(
    (state) => state.onboarding
  );
  return (
    <NavigationContainer>
      {true ? <MainTabs /> : <OnboardingStack />}
    </NavigationContainer>
  );
};

export default Navigation;
