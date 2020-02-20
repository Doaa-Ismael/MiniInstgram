import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button, Input, Layout} from '@ui-kitten/components';

import {login} from '../services/api';
import {setUserId} from './../utils/asyncStorage';
import Modal from '../sharedComponents/Modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    marginBottom: 25,
  },
  buttonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    backgroundColor: 'rgb(247, 95, 99)',
    borderColor: 'rgb(247, 95, 99)',
  },
});

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    login(email, password)
      .then(res => {
        const [user] = res.data;
        navigation.navigate('Home');
        setUserId(user.id);
      })
      .catch(() => {
        setShowModal(true);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.formContainer}>
        <Input
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Layout style={styles.buttonContainer}>
          <Button
            style={styles.button}
            size={'small'}
            onPress={() => handleLogin()}>
            Login
          </Button>
        </Layout>
      </Layout>
      <Modal
        showModal={showModal}
        onModalClose={() => setShowModal(false)}
        message={'username/password is invalid'}
      />
    </SafeAreaView>
  );
};
export default SignInScreen;
