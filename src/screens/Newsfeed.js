import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import Header from '../sharedComponents/Header';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginHorizontal: 30,
  },
  image: {
    flex: 1,
    width: '90%',
    height: 150,
    marginHorizontal: 14,
    marginVertical: 5,
    borderRadius: 5,
  },
});

const NewsfeedScreen = ({navigation, newsfeeds}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Newsfeed'} />
      <Layout style={styles.buttonContainer}>
        <Button
          title={'Add Post'}
          onPress={() => navigation.navigate('AddPost')}
        />
      </Layout>

      <ScrollView>
        {newsfeeds.map(post => (
          <Image
            key={post.uri}
            style={styles.image}
            source={{
              uri: post.img,
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  newsfeeds: state.newsfeeds,
});

export default connect(mapStateToProps)(NewsfeedScreen);
