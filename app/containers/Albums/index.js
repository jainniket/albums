import React, { Component } from 'react'
import AlbumList from '../../components/AlbumList';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

class Albums extends Component {
    componentWillMount() {
        console.log('album', this.props.albums);
        fetch('https://rallycoding.herokuapp.com/api/music_albums.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ albums: responseJson });
                console.log(this.state.albums);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header>Albums</Header>
                    <AlbumList albums={this.props.albums}/>
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

const mapStateToProps = state => {
    return {
        albums: state.albums
    }

};

export default connect(mapStateToProps)(Albums);
