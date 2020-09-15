import { SET_HOTLINE_NAME, SET_HOTLINE_NUMBER } from '../actions/constants';

const initialState = {
  hotlineName: null,
  hotlineNumber: null,
};

const attorneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTLINE_NAME:
      return {
        ...state,
        hotlineName: action.payload.hotlineName,
      };
    case SET_HOTLINE_NUMBER:
      return {
        ...state,
        hotlineNumber: action.payload.hotlineNumber,
      };
    default:
      return state;
  }
};

export default attorneyReducer;
