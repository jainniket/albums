import AlbumList from './components/AlbumList';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC1o1y2MXqCxFLcMNItidCTwNHhNqaOlzI",
            authDomain: "authentication-30454.firebaseapp.com",
            databaseURL: "https://authentication-30454.firebaseio.com",
            storageBucket: "authentication-30454.appspot.com",
            messagingSenderId: "370370756312"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
        case true:
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Header>Albums</Header>
                        <AlbumList />
                    </View>
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                </View>
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

export default App;
