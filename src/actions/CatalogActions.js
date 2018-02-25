import { types } from './types';
import catalogItems from './CatalogItems.json';

export const catalogList = () => {
  return (dispatch) => {
    dispatch({ type: types.catalog.list, payload: catalogItems });
  };
};
