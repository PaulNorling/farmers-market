const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LISTINGS':
            return action.payload
        case 'SET_USER_LISTINGS':
            return action.payload
        case 'SET_DETAIL':
            return action.payload
        case 'SET_SEARCH':
            return action.payload
        default:
            return state;
    }
}

export default listingsReducer;