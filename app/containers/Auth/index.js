import React, { Component } from 'react';
import { Text } from 'react-native';
import Custom from '../../components/Button';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions';
import { createStructuredSelector } from 'reselect';
import { selectEmail, selectError, selectLoading, selectPassword } from './selectors';

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (<Custom onPress={this.onButtonPress.bind(this)}>Login</Custom>);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            autoCorrect={false}
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            autoCorrect={false}
            label="Password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error.message}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  password: selectPassword(),
  loading: selectLoading(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    emailChanged: (email) => dispatch(emailChanged(email)),
    passwordChanged: (password) => dispatch(passwordChanged(password)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
