import { SET_ATTORNEY_NAME } from '../constants';

const setAttorneyNameAction = (attorneyName) => ({
  payload: { attorneyName },
  type: SET_ATTORNEY_NAME,
});

export default setAttorneyNameAction;
