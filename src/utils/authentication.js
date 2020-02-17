import {getEmail} from './asyncStorage';

export const isAuthenticated = async () => {
  const email = await getEmail().catch(e => console.log('Error: ', e));
  return !!email;
};
