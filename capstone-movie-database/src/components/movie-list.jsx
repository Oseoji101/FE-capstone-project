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
    <div className="movie-lists min-h-screen bg-green-600 p-8">
        <h1 className="text-white-500 font-bold text-4xl text-center mb-8">Movie List</h1>

        {loading && <p>Loading movies...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && movies.length > 0 && (
            <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-2'>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
            </div>
        )}
    </div>
  );
};
    
    export default MovieList;
