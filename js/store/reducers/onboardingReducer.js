import { COMPLETE_ONBOARDING, RESET_ONBOARDING } from '../actions/constants';

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
    case RESET_ONBOARDING: {
      return {
        ...state,
        complete: false,
      };
    }
    default:
      return state;
  }
};

export default onboardingReducer;
