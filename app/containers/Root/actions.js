export function loggedIn(state) {
    return {
        type: 'login',
        payload: state,
    };
}
