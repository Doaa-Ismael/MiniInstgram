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
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
import Loading from './src/screens/Loading';
import {isAuthenticated} from './src/utils/authentication';
import reducer from './src/redux/reducer';
import mySaga from './src/redux/sagas';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Login');

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySaga);

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
        <Provider store={store}>
          <Navigation initialRoute={initialRoute} />
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
