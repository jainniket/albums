// @flow

import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import Root from './containers/Root'

export default class NavAllDay extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'Authentication', index: 0 }}
                renderScene={(route, navigator) =>
                    <Root />
                }
            />
        );
    }
}
