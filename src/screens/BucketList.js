import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const BucketListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bucketlist</Text>
    </SafeAreaView>
  );
};

export default BucketListScreen;
