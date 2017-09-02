import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SingleItemRow from '../shared/singleItemRow';
import styles from '../shared/styles';
import { push } from '../actions';


class Character extends Component {
  render() {
    const characterStats = this.props.stats.map((stat, i) => (
      <SingleItemRow name={stat.name} value={stat.value} key={i} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Character
        </Text>
        {characterStats}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
});

export default connect(
  mapStateToProps,
)(Character);
