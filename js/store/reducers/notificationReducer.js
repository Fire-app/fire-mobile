import NOTIFICATION_LIST from '../../../data/notification';
import { STACK_NOTIFICATION, POP_NOTIFICATION } from '../actions/constants';

const notificationReducer = (state = NOTIFICATION_LIST, action) => {
  switch (action.type) {
    case STACK_NOTIFICATION: {
      return {
        ...state,
        item: action.payload,
      };
    }
    case POP_NOTIFICATION: {
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
