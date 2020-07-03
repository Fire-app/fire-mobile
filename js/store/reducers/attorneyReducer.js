import { SET_ATTORNEY_NAME } from '../actions/constants';

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
    default:
      return state;
  }
};

export default attorneyReducer;
