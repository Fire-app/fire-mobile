import { combineReducers } from 'redux';

import exampleReducer from './example/exampleReducer';
import onboardingReducer from './onboardingReducer';
import attorneyReducer from './attorneyReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  onboarding: onboardingReducer,
  attorney: attorneyReducer,
});

export default rootReducer;
