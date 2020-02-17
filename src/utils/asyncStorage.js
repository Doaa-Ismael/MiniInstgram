import AsyncStorage from '@react-native-community/async-storage';

export const setEmail = email => AsyncStorage.setItem('email', email);

export const getEmail = () => AsyncStorage.getItem('email');
