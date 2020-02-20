import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';

import Header from '../sharedComponents/Header';
import HorizontalLine from '../sharedComponents/HorizontalLine';
import {fetchUser} from '../redux/actionCreators';
import Modal from '../sharedComponents/Modal';
import {getUserId} from '../utils/asyncStorage';

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

const ProfileScreen = ({user, fetchUserAction}) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const errorMessage = 'Something went wrong please try again';
  useEffect(() => {
    const fetcUser = async () => {
      const userId = await getUserId();
      fetchUserAction(userId);
      //setShowErrorModal(true));
    };
    fetcUser();
  }, []);
  return (
    <SafeAreaView style={styles.view}>
      <Header title={'Profile'}/>
      <Layout style={styles.container}>
        <Layout style={styles.image}/>
        <Text style={styles.name} category="s1">
          {user.name}
        </Text>
        <Text style={styles.text} category="p2">
          {user.email}
        </Text>
        <Text style={styles.text} category="p2">
          {user.age} Years Old
        </Text>
      </Layout>
      <HorizontalLine />
      <Modal message={errorMessage} showModal={showErrorModal} />
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return ({user: state.user})
};

const mapDispatchToProps = dispatch => ({
  fetchUserAction: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
