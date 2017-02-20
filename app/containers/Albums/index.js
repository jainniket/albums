import React, { Component } from 'react'
import AlbumList from '../../components/AlbumList';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import { View } from 'react-native';

class Albums extends Component {
    render() {
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
    }
}

export default Albums;
