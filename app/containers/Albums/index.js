import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';
import AlbumList from '../../components/AlbumList';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import { fetchAlbum } from './actions';
import Spinner from '../../components/Spinner';
import { selectAlbumList, selectError, selectLoading } from './selectors';
import styles from './styles';

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
      return <Spinner size='large' />;
    } else if (this.props.error) {
      return (<Text style={styles.errorTextStyle}>
        {this.props.error}
      </Text>);
    } else {
      return (
        <AlbumList albums={this.props.albums} />
      );
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

Albums.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  albums: React.PropTypes.object,
  fetchAlbums: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  albums: selectAlbumList(),
  loading: selectLoading(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAlbums: () => dispatch(fetchAlbum()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
