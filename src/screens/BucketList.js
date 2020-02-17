import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../sharedComponents/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const BucketListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Bucket List'} />
      <Text>Bucketlist</Text>
    </SafeAreaView>
  );
};

export default BucketListScreen;
