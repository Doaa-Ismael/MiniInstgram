import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const NewsfeedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>News feed</Text>
      <Button
        title={'Add Post'}
        onPress={() => navigation.navigate('AddPost')}
      />
    </SafeAreaView>
  );
};

export default NewsfeedScreen;
