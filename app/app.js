import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import AppWithNavigationState from './routes';
import configureStore from './store';

// Needed for redux-saga es6 generator support
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`

const initialState = {};
const store = configureStore(initialState);

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC1o1y2MXqCxFLcMNItidCTwNHhNqaOlzI',
      authDomain: 'authentication-30454.firebaseapp.com',
      databaseURL: 'https://authentication-30454.firebaseio.com',
      storageBucket: 'authentication-30454.appspot.com',
      messagingSenderId: '370370756312',
    });
  }

  render() {

    // Create redux store with history
    // this uses the singleton browserHistory provided by react-router
    // Optionally, this could be changed to leverage a created history
    // e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/*<StatusBar barStyle='light-content' />*/}
          {/*<Routes store={store} />*/}
          <AppWithNavigationState store={store} />
        </View>
      </Provider>
    );
  }
}

export default App;
