import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import MovieCard from './MovieCard';


const MovieList = ({searchTerm}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchMovies = async () => {
        //checking if searchBar is empty
        if(!searchTerm.trim()) {
            setMovies([]);
            setLoading(false);
            return;
        }
        setLoading(true);
    //making API call 
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm.trim()}&apikey=5eef6005`);
        const data = await response.json()
    if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    }catch (error) {
        console.error('Error fetching movies:', error);
        

    } finally {
        setLoading(false);
    }
};
        fetchMovies();
        }, [searchTerm]);
    
        return (
    <div className="movie-lists min-h-screen p-8">
        <h1 className="font-bold text-4xl text-center mb-4">Movie Title</h1>

        {loading? (<p className='text-center text-gray-500'>Loading movies...</p>)
        :!searchTerm.trim()? (
            <p className="text-gray-500 italic">
                Please enter a movie title above 🎬
            </p>
            ) : movies.length === 0 ? (
            <p className="text-gray-500 italic">
                No movies found for "{searchTerm}". Try another title!
            </p>):(
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2'>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
                
            ))}
            </div>
        )}
    </div>
  );
};
    
    export default MovieList;
