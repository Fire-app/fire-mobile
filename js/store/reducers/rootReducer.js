import { combineReducers } from 'redux';

import onboardingReducer from './onboardingReducer';
import hotlineReducer from './hotlineReducer';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  hotline: hotlineReducer,
  notifications: notificationsReducer,
  onboarding: onboardingReducer,
});

export default rootReducer;
