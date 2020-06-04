import { COMPLETE_ONBOARDING } from '../actions/constants';

const initialState = {
  complete: false,
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_ONBOARDING: {
      return {
        ...state,
        complete: true,
      };
    }
    default:
      return state;
  }
};

export default onboardingReducer;
