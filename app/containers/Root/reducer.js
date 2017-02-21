export default (state = { login: null }, action) => {
    if (action && action.type === 'loginStatus') {
        return { login: action.payload };
    }
    return state;
};
