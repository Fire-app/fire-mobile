import {
  TOGGLE_ICE_NOTIFICATIONS,
  TOGGLE_DEFAULT_NOTIFICATIONS,
} from '../actions/constants';

// Initial state will be 10 most recent notifications fetched from database
// Do that on a separate file.
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
    default: {
      return state;
    }
  }
};

export default notificationReducer;
