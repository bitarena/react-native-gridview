import { combineReducers } from 'redux';
import CatalogListReducer from './CatalogListReducer';

export default combineReducers({
  items: CatalogListReducer,
});
