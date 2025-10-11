import React from "react";
import {Link} from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.imdbID}`}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />

            <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            </div>
           </Link> 
        </div>
    );
}
export default MovieCard;