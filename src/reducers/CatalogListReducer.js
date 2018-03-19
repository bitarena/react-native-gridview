import { CATALOG_FETCH } from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATALOG_FETCH:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
