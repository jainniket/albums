// @flow
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Routes from '../../routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../reducers'

const store = createStore(reducers);
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
    render() {
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
