import { SET_ARREST_ALERTS } from './constants';

const setArrestAlertsAction = (arrestAlerts) => ({
  payload: { arrestAlerts },
  type: SET_ARREST_ALERTS,
});

export default setArrestAlertsAction;
