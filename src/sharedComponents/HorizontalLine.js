import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const styles = StyleSheet.create({
  line: {
    backgroundColor: 'rgb(74, 82, 93)',
    width: '100%',
    height: 0.5,
    marginVertical: 2,
  },
});

const HorizontalLine = () => <Layout style={styles.line} />;

export default HorizontalLine;
