export default (state = [], action) => {
    if (action && action.type === 'ALBUM_LIST') {
        return action.payload;
    }
    return state;
};
