import { SET_FOO, TOGGLE_BAR } from '../constants';

export const toggleBarAction = () => ({
  type: TOGGLE_BAR,
});

export const incrementFooAction = (value) => ({
  payload: {
    value,
  },
  type: SET_FOO,
});
