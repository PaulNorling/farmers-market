const favoriteReducer = (state = [], action) => {
    console.log('favoriteReducer', action.payload)
	switch (action.type) {
		case 'SET_FAVORITES':
			return action.payload;
		case 'SET_USER_FAVORITES':
			return action.payload;
		default:
			return state;
	}
};

export default favoriteReducer;