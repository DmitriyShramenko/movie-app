import React, { useEffect, useState } from "react";
import { Offline, Online } from "react-detect-offline";

import './app.css'

import fetchMovies from '../../services/moviesAPI';
import MovieList from "../movieList";

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
			<Online>
				<MovieList movies={movies} />
			</Online>
			<Offline>
				<div className="no-network">
					Нет подключения к интернету
				</div>
			</Offline>
		</div>
	);
};

export default App;