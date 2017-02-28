import React, { Component } from 'react';
import { Scene, Router, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from './containers/Auth';
import Albums from './containers/Albums';
import { getAsyncInjectors } from './utils/asyncInjectors';
import authReducer from './containers/Auth/reducer';
import authSaga from './containers/Auth/sagas';
import albumReducer from './containers/Albums/reducer';
import albumSaga from './containers/Albums/sagas';

class Routes extends Component {

  reducerCreate = (params) => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  };

  renderAuth() {
    const { injectReducer, injectSagas } = getAsyncInjectors(this.props.store);
    injectReducer('auth', authReducer);
    injectSagas(authSaga);
    injectReducer('albums', albumReducer);
    injectSagas(albumSaga);
  }

  render() {
    return (
      <Router
        createReducer={this.reducerCreate}
        sceneStyle={{ paddingTop: 65 }}
      >
        <Scene key='auth'>
          <Scene key='login' component={Login} title='Login'>
            {this.renderAuth()}
          </Scene>
        </Scene>
        <Scene key='albums'>
          <Scene key='albumList' component={Albums} title='Albums' />
        </Scene>
      </Router>
    );
  }
}

Routes.propTypes = {
  store: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default connect()(Routes);
