import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, passwordClear } from './actions'

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.props;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginFail() {
        this.props.passwordClear();
    }

    onLoginSuccess() {
        this.props.passwordClear();
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }

    onEmailChange(text) {
        console.log(text);
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
                    {this.state.error}
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
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        emailChanged: (email) => dispatch(emailChanged(email)),
        passwordChanged: (password) => dispatch(passwordChanged(password)),
        passwordClear: () => dispatch(passwordClear()),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
