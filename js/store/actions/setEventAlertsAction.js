import { SET_EVENT_ALERTS } from './constants';

const setEventAlertsAction = (eventAlerts) => ({
  payload: { eventAlerts },
  type: SET_EVENT_ALERTS,
});

export default setEventAlertsAction;
