import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import CatalogList from './components/CatalogList';

const App = () =>
  <Provider store={createStore(reducers)}>
    <CatalogList />
  </Provider>;

/*
class App extends Component {
  componentWillMount() {
    const ds1 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const data1 = Array.apply(null, { length: 20 }).map(Number.call, Number);
    this.dataSource1 = ds1.cloneWithRows(data1);

    const ds2 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const data2 = Array.apply(null, { length: 30 }).map(Number.call, Number);
    this.dataSource2 = ds2.cloneWithRows(data2);
  }

  renderRow1(rowData) {
    return <Text style={styles.item1}>{rowData}</Text>;
  }

  renderRow2(rowData) {
    return <Text style={styles.item2}>{rowData}</Text>;
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <CatalogList />
      </Provider>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  item1: {
    backgroundColor: 'red',
    width: 100,
    height: 120,
    margin: 3,
  },
  item2: {
    backgroundColor: 'grey',
    width: 100,
    height: 90,
    margin: 3,
  },
};
*/
export default App;
