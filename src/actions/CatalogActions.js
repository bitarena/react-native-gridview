import { CATALOG_FETCH } from './types';
import items from './CatalogItems.json';

// export const catalogFetch = () => ({ type: 'FETCH'/*types.catalog.list*/, payload: [1, 2, 3, 4] /*items*/ });

export const catalogFetch = () => {
  return {
    type: CATALOG_FETCH,
    payload: items, // [100, 200, 300, 400, 500],
  };
};

// export const catalogFetch = () => {
//   return (dispatch) => {
//     dispatch({ type: 'FETCH', payload: /*[1, 2, 3, 4, 5, 6, 7, 8, 10, 11]*/ items });
//   };
// };
