/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as lightTheme} from '@eva-design/eva';

import Navigation from './src/navigation';
import Loading from './src/screens/Loading';
import {isAuthenticated} from './src/utils/authentication';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Login');
  useEffect(() => {
    isAuthenticated().then(res => {
      if (res) setInitialRoute('Home');
      setIsLoading(false);
    });
  });

  if (isLoading) return <Loading />;
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Navigation initialRoute={initialRoute} />
      </ApplicationProvider>
    </>
  );
};

export default App;
