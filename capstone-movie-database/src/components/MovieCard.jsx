import React from "react";
import {Link} from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie-card bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <Link to={`/movies/${movie.imdbID}`}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} className="w-full h-80 object-cover rounded-t-lg" />

            <div >
            <h3 className="text-lg font-semibold">{movie.Title}</h3>
            <p className="text-sm text-gray-500">{movie.Year}</p>
            </div>
           </Link> 
        </div>
    );
}
export default MovieCard;