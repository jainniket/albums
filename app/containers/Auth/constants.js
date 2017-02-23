/*
 * AuthConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const EMAIL_CHANGED = 'albums/Auth/EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'albums/Auth/PASSWORD_CHANGED';
export const PASSWORD_CLEAR = 'albums/Auth/PASSWORD_CLEAR';
export const USER_LOGIN_REQUESTED = 'albums/Auth/USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'albums/Auth/USER_LOGIN_SUCCEEDED';
export const USER_LOGIN_FAILED = 'albums/Auth/USER_LOGIN_FAILED';
