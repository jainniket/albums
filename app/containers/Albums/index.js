import React, { Component } from 'react'
import AlbumList from '../../components/AlbumList';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { fetchAlbum } from './actions'
import { Actions } from 'react-native-router-flux'
import Spinner from '../../components/Spinner';

class Albums extends Component {
    componentWillMount() {
        this.props.fetchAlbums();
    }

    handleLogOut() {
        firebase.auth().signOut();
        Actions.auth();
    }

    renderAlbums() {
        if (this.props.loading) {
            return <Spinner size="large" />
        } else if (this.props.error) {
            return (<Text style={styles.errorTextStyle}>
                {this.props.error}
            </Text>);
        } else {
            return (
                <AlbumList albums={this.props.albums} />
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.renderAlbums()}
                </View>
                <CardSection>
                    <Button onPress={this.handleLogOut}>
                        Log Out
                    </Button>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        loading: state.albums.loading,
        error: state.albums.error,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        fetchAlbums: () => dispatch(fetchAlbum()),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
