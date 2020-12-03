import {
  SET_ANNOUNCEMENTS,
  SET_ARREST_ALERTS,
  SET_EVENT_ALERTS,
} from '../actions/constants';

const initialState = {
  announcements: false,
  arrestAlerts: true,
  eventAlerts: false,
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload.announcements,
      };
    case SET_ARREST_ALERTS:
      return {
        ...state,
        arrestAlerts: action.payload.arrestAlerts,
      };
    case SET_EVENT_ALERTS:
      return {
        ...state,
        eventAlerts: action.payload.eventAlerts,
      };
    default:
      return state;
  }
};

export default notificationsReducer;
