import { combineReducers } from 'redux';

import exampleReducer from './example/exampleReducer';
import onboardingReducer from './onboardingReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  onboarding: onboardingReducer,
  settings: settingsReducer,
});

export default rootReducer;
