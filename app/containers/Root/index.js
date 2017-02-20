import AlbumList from '../../components/AlbumList';
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import Spinner from '../../components/Spinner';
import firebase from 'firebase';
import LoginForm from '../../components/LoginForm';
import Albums from '../Albums'

class Root extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC1o1y2MXqCxFLcMNItidCTwNHhNqaOlzI",
            authDomain: "authentication-30454.firebaseapp.com",
            databaseURL: "https://authentication-30454.firebaseio.com",
            storageBucket: "authentication-30454.appspot.com",
            messagingSenderId: "370370756312"
        });

        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         this.setState({ loggedIn: true });
        //     } else {
        //         this.setState({ loggedIn: false });
        //     }
        // })
        this.setState({ loggedIn: true });
    }

    renderContent() {
        switch (this.state.loggedIn) {
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

export default Root;
