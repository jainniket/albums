import React, { Component } from 'react'
import AlbumList from '../../components/AlbumList';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import data from './albumList.json'
import { albumList } from './actions'

class Albums extends Component {
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.fecthAlbums(responseJson);
            })
            .catch((error) => {
                console.log(error);
                this.props.fecthAlbums(data);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header>Albums</Header>
                    {console.log(this.props.albums)}
                    <AlbumList albums={this.props.albums} />
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

function mapDispatchToProps(dispatch) {
    return {
        fecthAlbums: (data) => dispatch(albumList(data)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
