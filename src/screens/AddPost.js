import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../sharedComponents/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const AddPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Add Post'} />
      <Text>Add Post</Text>
    </SafeAreaView>
  );
};

export default AddPostScreen;
