import {
  SET_ATTORNEY_NAME,
  SET_ATTORNEY_NUMBER,
  SET_HOTLINE_NUMBER,
} from '../actions/constants';

const initialState = {
  attorneyName: null,
  attorneyNumber: null,
  hotlineNumber: null,
};

const attorneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTORNEY_NAME:
      return {
        ...state,
        attorneyName: action.payload.attorneyName,
      };
    case SET_ATTORNEY_NUMBER:
      return {
        ...state,
        attorneyNumber: action.payload.attorneyNumber,
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
