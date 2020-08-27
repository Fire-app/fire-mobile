import { SET_HOTLINE_NUMBER } from '../constants';

const setHotlineNumberAction = (hotlineNumber) => ({
  payload: { hotlineNumber },
  type: SET_HOTLINE_NUMBER,
});

export default setHotlineNumberAction;
