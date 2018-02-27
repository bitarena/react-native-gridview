import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { catalogFetch } from './../actions';

class CatalogList extends Component {
  componentWillMount() {
    const ds1 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const data1 = Array.apply(null, { length: 20 }).map(Number.call, Number);
    this.dataSource1 = ds1.cloneWithRows(data1);

    // const data2 = Array.apply(null, { length: 30 }).map(Number.call, Number);
    this.props.catalogFetch();
    // this.createDataSource2(this.props);
    const ds2 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource2 = ds2.cloneWithRows(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props and this.props are still the old set of props
    const ds2 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource2 = ds2.cloneWithRows(nextProps.items);
  }

  // createDataSource2({ items }) {
  //   const ds2 = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   // items[0] = 100;
  //   // items[1] = 1000;

  //   this.dataSource2 = ds2.cloneWithRows(items);
  // }

  renderRow1(rowData) {
    return <Text style={styles.item1}>{rowData}</Text>;
  }

  renderRow2(rowData) {
    return <Text style={styles.item2}>{rowData.id}</Text>;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.container}>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.dataSource1}
            renderRow={this.renderRow1}
          />
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.dataSource2}
            renderRow={this.renderRow2}
          />
        </ScrollView>
      </View>
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

const mapStateToProps = state => {
  return { items: state.items };
  // const items = _.map(state.items, (val, uid) => {
  //   return { ...val, uid };
  // });

  // return { items };
};

export default connect(mapStateToProps, { catalogFetch })(CatalogList);
