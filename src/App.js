import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import CatalogList from './components/CatalogList';

const App = () => {
  const store = createStore(reducers/*, {}, applyMiddleware(ReduxThunk)*/);

  return (
    <Provider store={store}>
      <CatalogList />
    </Provider>
  );
};
  
export default App;
