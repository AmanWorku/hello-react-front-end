const initialState = {
	greeting: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_RANDOM_GREETING":
			return {
				...state,
				greeting: action.greeting,
			};
		default:
			return state;
	}
};

export default reducer;
