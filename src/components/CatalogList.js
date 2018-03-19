import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ScrollView, ListView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { catalogFetch } from './../actions';

class CatalogList extends Component {
  componentWillMount() {
    this.props.catalogFetch();

    const rightDS = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const leftDS = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const { leftCol, rightCol } = this.getColumns(this.items);

    this.leftDataSource = leftDS.cloneWithRows(leftCol);
    this.rightDataSource = rightDS.cloneWithRows(rightCol);
  }

  componentWillReceiveProps(nextProps) {
    // TODO: DRY
    // nextProps are the next set of props and this.props are still the old set of props
    const ds2 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const ds1 = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const { leftCol, rightCol } = this.getColumns(nextProps.items);

    this.leftDataSource = ds2.cloneWithRows(leftCol);

    this.rightDataSource = ds1.cloneWithRows(rightCol);
  }

  setupDataSource() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return dataSource;
  }

  getColumns(items) {
    const leftCol = [];
    const rightCol = [];

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if ((i + 2) % 2 === 0) {
          leftCol.push(items[i]);
        } else {
            rightCol.push(items[i]);
        }
      }
    }
    return { leftCol, rightCol };
  }

  // getLeftItems() {
  //   debugger;
  //   const result = this.props.items.filter((index) =>
  //     index % 2 !== 0
  //   );
  //   return result;
  // }

  // getRightItems() {
  //   debugger;
  //   const result = this.props.items.filter((index) =>
  //     index % 2 === 0
  //   );
  //   return result;
  // }

  renderRow1(rowData) {
    return <Text style={styles.item1}>{rowData.id}</Text>;
  }

  renderRow2(rowData) {
    const { height, width } = Dimensions.get('window');

    return <Text style={col2Styles(rowData.height, width / 2)}>{rowData.id}</Text>; 
    // return <Text style={styles.item2}>{rowData.id}</Text>;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.container}>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.leftDataSource}
            renderRow={this.renderRow1}
          />
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.rightDataSource}
            renderRow={this.renderRow2}
          />
        </ScrollView>
      </View>
    );
  }
}

const col2Styles = (height, width) => {
  return {
    backgroundColor: 'grey',
    width,
    height,
    margin: 3,
  };
};

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
    width: 150,
    height: 120,
    margin: 3,
  },
  item2: {
    backgroundColor: 'grey',
    width: 150,
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
