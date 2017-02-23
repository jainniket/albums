// @flow

import React, { Component } from 'react'
import { Scene, Router, Reducer } from 'react-native-router-flux'
import Root from './containers/Root'
import Login from './containers/Auth'
import Albums from './containers/Albums'
import { connect } from 'react-redux'

class Routes extends Component {

    reducerCreate(params) {
        const defaultReducer = Reducer(params);
        return (state, action) => {
            this.props.dispatch(action);
            return defaultReducer(state, action);
        };
    }

    render() {
        return (
            <Router
                createReducer={this.reducerCreate.bind(this)}
                sceneStyle={{ paddingTop: 65 }}
            >
                <Scene key="auth">
                    <Scene key="login" component={Login} title="Login" />
                </Scene>

                <Scene key="albums">
                    <Scene key="albumList" component={Albums} title="Albums" />
                </Scene>
            </Router>
        )
    }
}

export default connect()(Routes);
