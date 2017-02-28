/**
 * The auth state selectors
 */
import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const selectEmail = () => createSelector(
  selectAuth,
  (auth) => auth.get('email')
);

const selectPassword = () => createSelector(
  selectAuth,
  (auth) => auth.get('password')
);

const selectLoading = () => createSelector(
  selectAuth,
  (auth) => auth.get('loading')
);

const selectError = () => createSelector(
  selectAuth,
  (auth) => auth.get('error')
);

export {
  selectAuth,
  selectEmail,
  selectPassword,
  selectLoading,
  selectError,
};
