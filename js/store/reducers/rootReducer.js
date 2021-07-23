import { combineReducers } from 'redux';

import onboardingReducer from './onboardingReducer';
import settingsReducer from './settingsReducer';
import notificationReducer from './notificationReducer'

const rootReducer = combineReducers({
  notifications: notificationReducer,
  onboarding: onboardingReducer,
  settings: settingsReducer,
});

export default rootReducer;
