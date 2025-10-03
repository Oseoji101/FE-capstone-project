import React, {useEffect, useState} from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchMovies = async () => {
    try {
        const response = await fetch('https://www.omdbapi.com/?s=batman&apikey=5eef6005');
        const data = await response.json()
        if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
            console.warn('No movies found:', data.Error);
        }
    }catch (error) {
        console.error('Error fetching movies:', error);

    }
};
        fetchMovies();
        }, []);
    
        return (
            <div>
                <h2>Movie List</h2>
                <ul>
                    {movies && movies.map((movie, index) => (
                        <li key={index}>{movie.Title}</li>
                    ))}
                </ul>
            </div>
        );
    };
    
    export default MovieList;
