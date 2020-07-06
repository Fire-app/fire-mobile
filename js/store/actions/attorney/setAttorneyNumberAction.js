import { SET_ATTORNEY_NUMBER } from '../constants';

const setAttorneyNumberAction = (phoneNumber) => ({
  type: SET_ATTORNEY_NUMBER,
  payload: { phoneNumber },
});

export default setAttorneyNumberAction;
