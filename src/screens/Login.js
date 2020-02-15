import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button title={'Login'} onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default LoginScreen;
