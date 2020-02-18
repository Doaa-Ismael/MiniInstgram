import {getUserId} from './asyncStorage';

export const isAuthenticated = async () => {
  const userId = await getUserId().catch(e => console.log('Error: ', e));
  return !!userId;
};
