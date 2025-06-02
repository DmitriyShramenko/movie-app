import { Card, Row, Col, Typography, Tag } from "antd";

const MovieCard = ({ movie }) => (
	<Card
		hoverable
		style={{
			width: "100%",
			borderRadius: 12,
			overflow: "hidden",
			boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
			padding: 0
		}}
		styles={{
			body: {
				padding: 0
			}
		}}
	>
		<Row
			style={{ minHeight: 180 }}
			align="stretch"
			gutter={0}
			wrap={false}
		>
			<Col style={{ flex: "none" }}>
				<img
					alt={movie.title}
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					style={{
						height: "100%",
						width: 120,
						objectFit: "cover",
						display: "block"
					}}
				/>
			</Col>
			<Col flex="auto" style={{ padding: "16px 16px 16px 20px" }}>
				<Typography.Title level={5} style={{ marginBottom: 4 }}>
					{movie.title}
				</Typography.Title>
				<Typography.Text type="secondary" style={{ display: "block", marginBottom: 8 }}>
					{movie.release_date}
				</Typography.Text>
				<div style={{ marginBottom: 8 }}>
					{(movie.genre_ids || []).map((_, idx) => (
						<Tag key={idx}>Movie</Tag>
					))}
				</div>
				<Typography.Paragraph ellipsis={{ rows: 3 }} style={{ margin: 0 }}>
					{movie.overview}
				</Typography.Paragraph>
			</Col>
		</Row>
	</Card>
);

export default MovieCard;