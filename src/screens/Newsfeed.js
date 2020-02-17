import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import Header from '../sharedComponents/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const NewsfeedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Newsfeed'} />
      <Text>News feed</Text>
      <Button
        title={'Add Post'}
        onPress={() => navigation.navigate('AddPost')}
      />
    </SafeAreaView>
  );
};

export default NewsfeedScreen;
