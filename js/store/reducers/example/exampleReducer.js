import { SET_FOO, TOGGLE_BAR } from '../../actions/constants';

const initialState = {
  bar: true,
  foo: 'Howdy!',
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOO: {
      const { value } = action.payload;
      return {
        ...state,
        foo: value,
      };
    }
    case TOGGLE_BAR: {
      return {
        ...state,
        bar: !state.bar,
      };
    }
    default:
      return state;
  }
};

export default exampleReducer;
