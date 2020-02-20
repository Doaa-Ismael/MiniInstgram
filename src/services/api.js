import Axios from 'axios';
import {Platform} from 'react-native';
const DEVELOPMENT_BASE_URL = {
  "android": "http://10.0.2.2:3000",
  "ios":"http://localhost:3000"
};

const axios = Axios.create({
  baseURL: DEVELOPMENT_BASE_URL[Platform.OS],
  timeout: 1000,
});

export const login = (email, password) =>
  axios.get(`/users?email=${email}&password=${password}`);

export const addNewPlace = (place, userId) =>
  axios.post(`/bucketLists`, {
    userId,
    place,
  });

export const fetchUser = userId => axios.get(`/users/?id=${userId}`);

export const fetchBucketList = userId =>
  axios.get(`/bucketLists?user_id=${userId}`);

export const addNewPost = (imgUri, userId) =>
  axios.post(`/users/?id=${userId}/posts`, {
    img: imgUri,
  });
