import AlbumList from '../../components/AlbumList';
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import firebase from 'firebase';
import LoginForm from '../../components/LoginForm';
import Albums from '../Albums'
import { loggedIn } from './actions'
import { connect } from 'react-redux'

class Root extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        console.log('login', this.props);
        firebase.initializeApp({
            apiKey: "AIzaSyC1o1y2MXqCxFLcMNItidCTwNHhNqaOlzI",
            authDomain: "authentication-30454.firebaseapp.com",
            databaseURL: "https://authentication-30454.firebaseio.com",
            storageBucket: "authentication-30454.appspot.com",
            messagingSenderId: "370370756312"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.loggedIn(true);
            } else {
                this.props.loggedIn(false);
            }
        });
        this.setState({ loggedIn: true });
        // this.props.loggedIn(true);
    }

    renderContent() {
        console.log('loginValue', this.props.login);
        switch (this.props.login) {
        case true:
            return (
                <Albums />
            );
        case false:
            return (
                <View>
                    <Header>Authentication</Header>
                    <LoginForm />
                </View>
            );
        default:
            return (
                <View>
                    <Header>Authentication</Header>
                    <Spinner size="large" />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderContent()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        login: state.root.login
    }

};

function mapDispatchToProps(dispatch) {
    return {
        loggedIn: (state) => dispatch(loggedIn(state)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
