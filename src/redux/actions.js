export const fetchRandomGreeting = () => {
	return (dispatch) => {
		fetch("/api/v1/greetings")
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
