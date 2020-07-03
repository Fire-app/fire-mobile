import { SET_ATTORNEY_NAME } from '../constants';

const setAttorneyNameAction = (name) => ({
  type: SET_ATTORNEY_NAME,
  payload: { name },
});

export default setAttorneyNameAction;
