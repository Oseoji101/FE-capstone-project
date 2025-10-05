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
            console.warn('No movies found:', data);
        }
    }catch (error) {
        console.error('Error fetching movies:', error);

    }
};
        fetchMovies();
        }, []);
    
        return (
            <div>
                <h1>Movie List</h1>
                    {movies.length > 0 ? (movies.map((movie) => (
                        <div key={movie.index}>
                            <h3>{movie.Title}</h3>
                            <img src={movie.Poster} alt={movie.Title} width="100"/>
                        </div>
                    ))
                ): (
                    <p>Loading movies...</p>
                )
            }
            </div>
        );
    };
    
    export default MovieList;
