export const fetchRandomGreeting = () => {
	return (dispatch) => {
		fetch("http://127.0.0.1:3000//api/v1/greetings")
			.then((response) => response.json())
			.then((data) => {
				dispatch(setRandomGreeting(data.greeting));
			});
	};
};

export const setRandomGreeting = (greeting) => ({
	type: "SET_RANDOM_GREETING",
	greeting,
});
