import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from '../AlbumDetail';

class AlbumList extends Component {
  renderAlbums() {
    return this.props.albums.map((album) =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

AlbumList.propTypes = {
  albums: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
};

export default AlbumList;
