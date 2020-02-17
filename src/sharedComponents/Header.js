import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import HorizontalLine from './HorizontalLine';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
  line: {
    backgroundColor: 'black',
    width: '100%',
    height: 1,
  },
  title: {
    color: 'rgb(74, 82, 93)',
  },
});

const Header = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title} category="h6">{title}</Text>
    <HorizontalLine />
  </View>
);

export default Header;
