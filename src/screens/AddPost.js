import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const AddPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add Post</Text>
    </SafeAreaView>
  );
};

export default AddPostScreen;
