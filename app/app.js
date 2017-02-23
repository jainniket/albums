// @flow
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Routes from './routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import firebase from 'firebase'
import albumData from './containers/Albums/sagas'
import authenticateUser from './containers/Auth/sagas'

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC1o1y2MXqCxFLcMNItidCTwNHhNqaOlzI",
            authDomain: "authentication-30454.firebaseapp.com",
            databaseURL: "https://authentication-30454.firebaseio.com",
            storageBucket: "authentication-30454.appspot.com",
            messagingSenderId: "370370756312"
        });
    }

    render() {
        // create the saga middleware
        const sagaMiddleware = createSagaMiddleware();
        // mount it on the Store
        const store = createStore(
            reducer,
            applyMiddleware(sagaMiddleware)
        );
        // then run the saga
        sagaMiddleware.run(authenticateUser);
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    {/*<StatusBar barStyle='light-content' />*/}
                    <Routes />
                </View>
            </Provider>
        )
    }
}

export default App;
