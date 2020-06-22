import { TOGGLE_BAR, SET_FOO } from '../constants';

export const toggleBarAction = () => ({
  type: TOGGLE_BAR,
});

export const incrementFooAction = (value) => ({
  type: SET_FOO,
  payload: {
    value,
  },
});
