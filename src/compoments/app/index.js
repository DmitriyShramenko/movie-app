import React, { useEffect, useState } from "react";

import './app.css';

import fetchMovies from '../../services/moviesAPI';
import Block from "../block";

const App = () => {

	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchMovies()
			.then(setMovies)
			.catch((err) => setError(err.message));
	}, []);

	return (
		<div>
			<Block movies={movies} />
		</div>
	);
};

export default App;