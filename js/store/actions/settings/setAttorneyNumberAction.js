import { SET_ATTORNEY_NUMBER } from '../constants';

const setAttorneyNumberAction = (attorneyNumber) => ({
  type: SET_ATTORNEY_NUMBER,
  payload: { attorneyNumber },
});

export default setAttorneyNumberAction;
