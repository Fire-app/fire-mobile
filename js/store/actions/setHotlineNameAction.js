import { SET_HOTLINE_NAME } from './constants';

const setHotlineNumberAction = (hotlineName) => ({
  payload: { hotlineName },
  type: SET_HOTLINE_NAME,
});

export default setHotlineNumberAction;
