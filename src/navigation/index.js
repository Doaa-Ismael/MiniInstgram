import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/Login';
import NewsfeedScreen from '../screens/Newsfeed';
import ProfileScreen from '../screens/Profile';
import BucketListScreen from '../screens/BucketList';
import AddPostScreen from '../screens/AddPost';

const MainStack = createStackNavigator();
const FeedsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsFeedsStack = () => {
  return (
    <FeedsStack.Navigator headerMode={'none'}>
      <FeedsStack.Screen name="Newfeeds" component={NewsfeedScreen} />
      <FeedsStack.Screen name="AddPost" component={AddPostScreen} />
    </FeedsStack.Navigator>
  );
};


const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Newsfeed" component={NewsFeedsStack} />
      <Tab.Screen name="Bucketlist" component={BucketListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode={'none'}>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeTabs} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
