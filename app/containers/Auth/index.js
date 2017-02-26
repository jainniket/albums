import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions'

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    )
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
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'red',
  }
};

const mapStateToProps = state => {
  return {
    email: state.get('auth').email,
    password: state.get('auth').password,
    loading: state.get('auth').loading,
    error: state.get('auth').error,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    emailChanged: (email) => dispatch(emailChanged(email)),
    passwordChanged: (password) => dispatch(passwordChanged(password)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
