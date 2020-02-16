import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button, Input, Layout} from '@ui-kitten/components';

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

  const handleLogin = () => {
    // login logic
    return navigation.navigate('Home');
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
    </SafeAreaView>
  );
};

export default SignInScreen;
