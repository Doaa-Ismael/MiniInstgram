import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Header from '../sharedComponents/Header';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import HorizontalLine from '../sharedComponents/HorizontalLine';
import * as API from './../services/api';
import {getUserId} from '../utils/asyncStorage';

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

const BucketListScreen = ({
                            bucketList = [{
                              'id': 1,
                              'user_id': 'FCCF87D0-D2CC-45CD-2906-747628B5EFC0',
                              'place': 'Camborne',
                            },
                              {
                                'id': 2,
                                'user_id': '6D5F84A0-C782-E154-D51F-8EA3AD2DBA24',
                                'place': 'Armstrong',
                              },
                              {
                                'id': 3,
                                'user_id': '433B5ADC-7CDA-9631-40EB-32485C8D8B21',
                                'place': 'Tauranga',
                              }],
                          }) => {
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

export default BucketListScreen;
