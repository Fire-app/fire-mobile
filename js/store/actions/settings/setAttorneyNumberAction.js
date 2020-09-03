import { SET_ATTORNEY_NUMBER } from '../constants';

const setAttorneyNumberAction = (attorneyNumber) => ({
  payload: { attorneyNumber },
  type: SET_ATTORNEY_NUMBER,
});

export default setAttorneyNumberAction;
