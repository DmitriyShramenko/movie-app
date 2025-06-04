import React, { useState } from "react";
import { Card, Row, Col, Typography, Tag, Spin } from "antd";

import './movieCard.css';

const MovieCard = ({ movie }) => {
	const [loading, setLoading] = useState(true);
	const [imageError, setImageError] = useState(false);

	const { Title, Text, Paragraph } = Typography;

	const imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<Card
			hoverable
			className="movie-card"
			styles={{
				body: {
					padding: 0,
				},
			}}
		>
			<Row
				className="movie-card-row"
				align="stretch"
				gutter={0}
				wrap={false}
			>
				<Col className="movie-poster-col">
					{loading && !imageError && <Spin size="large" />}
					{!imageError && (
						<img
							alt={movie.title}
							src={imageSrc}
							onLoad={() => setLoading(false)}
							onError={() => {
								setLoading(false);
								setImageError(true);
							}}
							className="movie-poster-img"
							style={{ display: loading ? "none" : "block" }}
						/>
					)}
					{imageError && !loading && (
						<div className="movie-poster-placeholder">
							<span>No Image</span>
						</div>
					)}
				</Col>

				<Col className="movie-details-col" flex="auto">
					<Title level={5} className="movie-title">
						{movie.title}
					</Title>
					<Text type="secondary" className="movie-date">
						{movie.release_date}
					</Text>
					<div className="movie-tags">
						{(movie.genre_ids || []).map((_, idx) => (
							<Tag key={idx}>Movie</Tag>
						))}
					</div>
					<Paragraph ellipsis={{ rows: 3 }} className="movie-overview">
						{movie.overview}
					</Paragraph>
				</Col>
			</Row>
		</Card>
	);
};

export default MovieCard;
