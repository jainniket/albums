/**
 * The albums state selectors
 */

import { createSelector } from 'reselect';

const selectAlbums = (state) => state.get('albums');

const selectAlbumList = () => createSelector(
  selectAlbums,
  (albums) => albums.get('albumList')
);

const selectLoading = () => createSelector(
  selectAlbums,
  (albums) => albums.get('loading')
);

const selectError = () => createSelector(
  selectAlbums,
  (albums) => albums.get('error')
);

export {
  selectAlbums,
  selectAlbumList,
  selectLoading,
  selectError,
};
