import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

export const login = (email, password) =>
  axios.get(`/users?email=${email}&password=${password}`);

export const addNewPlace = (place, user_id) =>
  axios.post(`/bucketLists`, {
    user_id,
    place,
  });

export const fetchBucketList = userId =>
  axios.get(`/bucketLists?user_id=${userId}`);
