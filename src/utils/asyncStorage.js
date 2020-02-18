import AsyncStorage from '@react-native-community/async-storage';

export const setUserId = userId => AsyncStorage.setItem('userId', userId);

export const getUserId = () => AsyncStorage.getItem('userId');
