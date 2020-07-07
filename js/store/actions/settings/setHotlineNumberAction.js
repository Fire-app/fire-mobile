import { SET_HOTLINE_NUMBER } from '../constants';

const setHotlineNumberAction = (hotlineNumber) => ({
  type: SET_HOTLINE_NUMBER,
  payload: { hotlineNumber },
});

export default setHotlineNumberAction;
