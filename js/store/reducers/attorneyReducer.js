import { SET_ATTORNEY_NAME, SET_ATTORNEY_NUMBER } from '../actions/constants';

const initialState = {
  name: null,
  phoneNumber: null,
};

const attorneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTORNEY_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case SET_ATTORNEY_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber,
      };
    default:
      return state;
  }
};

export default attorneyReducer;
