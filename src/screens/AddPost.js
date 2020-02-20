import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import Header from '../sharedComponents/Header';
import {Button, Layout} from '@ui-kitten/components';
import {addNewPost} from '../redux/actionCreators';
import {connect} from 'react-redux';
import {getUserId} from '../utils/asyncStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imageButton: {
    width: '30%',
    height: 100,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 1,
  },
  button: {
    marginBottom: 80,
    width: '70%',
    alignSelf: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  border: {
    borderWidth: 2,
    borderColor: 'red'
  }
});

const imageUris = [
  'https://www.thewowstyle.com/wp-content/uploads/2015/07/natural-landscape-purple-lake-wallpaper-.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
];

const AddPostScreen = ({addNewPostAction, navigation, componentId}) => {
  const [image, setImage] = useState('');
  const addNewPost = async () => {
    if (image) {
      const userId = await getUserId();
      addNewPostAction(image, userId);
      navigation.pop(componentId);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Add Post'} />
      <Layout style={styles.imagesContainer}>
        {imageUris.map(imageUri => (
          <TouchableOpacity
            key={imageUri}
            style={[
              styles.imageButton,
              image === imageUri ? styles.border : {},
            ]}
            onPress={() => setImage(imageUri)}>
            <Layout>
              <Image
                style={styles.image}
                source={{
                  uri: imageUri,
                }}
              />
            </Layout>
          </TouchableOpacity>
        ))}
      </Layout>
      <Button style={styles.button} onPress={() => addNewPost()}>
        Add
      </Button>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewPostAction: (imgUri, userId) => dispatch(addNewPost(imgUri, userId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddPostScreen);
