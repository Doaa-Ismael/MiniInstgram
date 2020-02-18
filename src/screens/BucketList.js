import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';

import Header from '../sharedComponents/Header';
import HorizontalLine from '../sharedComponents/HorizontalLine';
import * as API from './../services/api';
import {getUserId} from '../utils/asyncStorage';
import {addNewPlace, fetchBucketList} from '../redux/actionCreators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 5
  },
  input: {
    flex: 2,
    marginHorizontal: 5,
  },
  button: {
    height: 38,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  itemContainer: {
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
});

const BucketListScreen = ({fetchBucketList, bucketList}) => {
  const [place, setPlace] = useState('');
  const addNewPlace = async () => {
    if (place) {
      const user_id = await getUserId();
      const res = await API.addNewPlace(place, user_id);
      if (res.status === 201) {
        setPlace('');
        // update current list
      }
    }
  };

  useEffect(() => {
    getUserId().then(userId => fetchBucketList(userId))
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Bucket List'} />
      <Layout style={styles.form}>
        <Input
          style={styles.input}
          placeholder="place"
          value={place}
          onChangeText={value => setPlace(value)}
        />
        <Button
          style={styles.button}
          size={'tiny'}
          icon={() => <Icon name={'plus'} fill={'grey'} />}
          onPress={() => addNewPlace()}
        />
      </Layout>
      <FlatList
        data={bucketList}
        renderItem={({item}) => (
          <Layout style={styles.itemContainer}>
            <Text style={styles.item}>{item.place}</Text>
            <HorizontalLine />
          </Layout>
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  bucketList: state.bucketList,
});
const mapDispatchToProps = dispatch => ({
  fetchBucketList: userId => dispatch(fetchBucketList(userId)),
  addNewPlace: (place, userId) => dispatch(addNewPlace(place, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketListScreen);
