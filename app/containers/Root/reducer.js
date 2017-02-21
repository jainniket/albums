export default (state = { login: null }, action) => {
    if (action && action.type === 'login') {
        return { login: action.payload };
    }
    return state;
};
