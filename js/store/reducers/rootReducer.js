import { combineReducers } from 'redux';

import onboardingReducer from './onboardingReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  settings: settingsReducer,
});

export default rootReducer;
