import React, { useEffect, useState } from "react";

function Greeting() {
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		fetch("/api/v1/greetings")
			.then((response) => response.json())
			.then((data) => setGreeting(data.greeting));
	}, []);

	return (
		<div>
			<h1>Random Greeting:</h1>
			<p>{greeting}</p>
		</div>
	);
}

export default Greeting;
