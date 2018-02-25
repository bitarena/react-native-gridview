import { types } from './../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.catalog.list:
      return action.payload;
    default:
      return state;
  }
};
