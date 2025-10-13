import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import MovieCard from './MovieCard';


const MovieList = ({searchTerm}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchMovies = async () => {
        setLoading(true);
        setError("");
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm.trim()}&apikey=5eef6005`);
        const data = await response.json()
        console.log("API data:", data);
    if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
            setError(data.Error || "No movies found.");
        }
    }catch (error) {
        console.error('Error fetching movies:', error);
        setError("Failed to fetch movies. Please try again later.");

    } finally {
        setLoading(false);
    }
};
        fetchMovies();
        }, [searchTerm]);
    
        return (
    <div>
        <h1>Movie List</h1>

        {loading && <p>Loading movies...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && movies.length > 0 && (
            <div>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
            </div>
        )}
    </div>
  );
};
    
    export default MovieList;
