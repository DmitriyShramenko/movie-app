const fetchMovies = async () => {
	try {
		const response = await fetch("https://api.themoviedb.org/3/search/movie?query=Inception", {
			headers: {
				"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E1Y2Q4MjIzYmJlMWQ2OTQyZWY5ZDJhNWEwYzFiNCIsIm5iZiI6MTc0ODA4ODM5MS40NzIsInN1YiI6IjY4MzFiNjQ3NDlkMjk5ZmJkZDJiNmE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y3DfPEB0ZpO-TqA4aN0VNX6gYsgCDUJNvwwMDDf8gGI",
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result.results;
	} catch (err) {
		throw err;
	}
};

export default fetchMovies;