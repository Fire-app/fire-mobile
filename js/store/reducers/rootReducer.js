import { combineReducers } from 'redux';

import exampleReducer from './example/exampleReducer';
import onboardingReducer from './onboardingReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  onboarding: onboardingReducer,
});

export default rootReducer;
