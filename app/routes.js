import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { getAsyncInjectors } from './utils/asyncInjectors';
import authReducer from './containers/Auth/reducer';
import authSaga from './containers/Auth/sagas';
import auth from './containers/Auth';
import albumsReducer from './containers/Albums/reducer';
import albumsSaga from './containers/Albums/sagas';
import albums from './containers/Albums';

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
    const { injectReducer, injectSagas } = getAsyncInjectors(this.props.store);
    injectReducer('auth', authReducer);
    injectSagas(authSaga);
    injectReducer('albums', albumsReducer);
    injectSagas(albumsSaga);
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.get('nav'),
  };
}

AppWithNavigationState.propTypes = {
  store: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  nav: React.PropTypes.object,
};

export default connect(mapStateToProps)(AppWithNavigationState);

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export const AppNavigator = StackNavigator({
  Home: {
    screen: auth,
    navigationOptions: {
      title: 'Authentication',
    },
  },
  Albums: {
    screen: albums,
    navigationOptions: {
      title: 'Albums',
      header: {
        left: null,
      },
    },
  },
});
