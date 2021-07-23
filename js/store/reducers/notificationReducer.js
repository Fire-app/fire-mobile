import {
  TOGGLE_ICE_NOTIFICATIONS,
  TOGGLE_DEFAULT_NOTIFICATIONS,
  UNTOGGLE_ICE_NOTIFICATIONS,
  UNTOGGLE_DEFAULT_NOTIFICATIONS,
} from '../actions/constants';

const initialState = {
  default_notifications: true,
  ice_notification: true,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ICE_NOTIFICATIONS: {
      return {
        ...state,
        ice_notification: !state.ice_notification,
      };
    }
    case TOGGLE_DEFAULT_NOTIFICATIONS: {
      return {
        ...state,
        default_notifications: !state.default_notifications,
      };
    }
    case UNTOGGLE_ICE_NOTIFICATIONS: {
      return {
        ...state,
        ice_notification: false,
      };
    }
    case UNTOGGLE_DEFAULT_NOTIFICATIONS: {
      return {
        ...state,
        default_notifications: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
