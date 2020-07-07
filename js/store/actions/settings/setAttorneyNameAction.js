import { SET_ATTORNEY_NAME } from '../constants';

const setAttorneyNameAction = (attorneyName) => ({
  type: SET_ATTORNEY_NAME,
  payload: { attorneyName },
});

export default setAttorneyNameAction;
