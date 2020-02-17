import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';

import SignInScreen from '../screens/SignIn';
import NewsfeedScreen from '../screens/Newsfeed';
import ProfileScreen from '../screens/Profile';
import BucketListScreen from '../screens/BucketList';
import AddPostScreen from '../screens/AddPost';

const MainStack = createStackNavigator();
const FeedsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getIcon = tabName => {
  const tabsIconsColors = {
    Newsfeed: 'red',
    Bucketlist: 'blue',
    Profile: 'black',
  };
  return (
    <Icon
      name="square"
      width={20}
      height={20}
      fill={tabsIconsColors[tabName]}
    />
  );
};

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
      <Tab.Screen
        name="Newsfeed"
        component={NewsFeedsStack}
        options={{tabBarIcon: () => getIcon('Newsfeed')}}
      />
      <Tab.Screen
        name="Bucketlist"
        component={BucketListScreen}
        options={{tabBarIcon: () => getIcon('Bucketlist')}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: () => getIcon('Profile')}}
      />
    </Tab.Navigator>
  );
};

const Navigation = ({initialRoute}) => (
  <NavigationContainer>
    <MainStack.Navigator headerMode={'none'} intialRouteName={initialRoute}>
      <MainStack.Screen name="Home" component={HomeTabs} />
      <MainStack.Screen name="Login" component={SignInScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
