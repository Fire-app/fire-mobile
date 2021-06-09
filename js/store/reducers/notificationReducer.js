import NOTIFICATION_LIST from '../../../data/notification';
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/constants';

const notificationReducer = (state = NOTIFICATION_LIST, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return {
        ...state,
        item: action.payload,
      };
    }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        complete: false,
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
