import { SET_HOTLINE_NAME } from '../constants';

const setHotlineNumberAction = (hotlineName) => ({
  type: SET_HOTLINE_NAME,
  payload: { hotlineName },
});

export default setHotlineNumberAction;
