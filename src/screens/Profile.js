import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Header from '../sharedComponents/Header';
import HorizontalLine from '../sharedComponents/HorizontalLine';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    backgroundColor: 'rgb(223, 230, 238)',
    width: 80,
    height: 80,
  },
  name: {
    color: 'rgb(74, 82, 93)',
  },
  text: {
    color: 'rgb(161, 164, 171)',
    fontSize: 16,
  },
});

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Header title={'Profile'} />
      <Layout style={styles.container}>
        <Layout style={styles.image} />
        <Text style={styles.name} category="s1">Name</Text>
        <Text style={styles.text} category="p2">kdd@ddd.dd</Text>
        <Text style={styles.text} category="p2">23 Years Old</Text>
      </Layout>
      <HorizontalLine />
    </SafeAreaView>
  );
};

export default ProfileScreen;
