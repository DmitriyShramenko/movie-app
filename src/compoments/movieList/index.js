import React from "react";

import { Row, Col } from "antd";
import 'antd/dist/reset.css';
import MovieCard from '../movieCard'

const MovieList = ({ movies }) => {
	const visibleMovies = movies.slice(0, 6);

	return (
		<div style={{ padding: 24 }}>
			<Row gutter={[24, 24]}>
				{visibleMovies.map((movie) => (
					<Col
						key={movie.id}
						xs={24}
						sm={12}
						md={8}
					>
						<MovieCard movie={movie} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MovieList;