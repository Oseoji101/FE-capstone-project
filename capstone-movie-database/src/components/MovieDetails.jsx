import React from "react"
import {useState, useEffect} from "react"
import {Link, useParam} from "react-router-dom"
function MovieDetails() {
  const [movies, setMovies] = useState();
  const {id} = useParams();


  useEffect((id) => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch()
        const data = await response.json();
        setMovies(data);
      }catch (error) {
          console.error("Error fetching movie details:", error);
        }

    } 
    fetchMovieDetails();
  },[id]);

  if(!movies) {
    return <p>Movies Loading...</p>
  }
      return (
    <div>
      <div>
          <Link to="/">Back to movies </Link>
        <div>
          <h3>{movie.Title}</h3>
          <img src="{movie.Poster}" alt="{movie.Title}"/>
          <p>plot: {movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
          <p>movie summary: {movie.Summary}</p>
          <p>Director: {movie.Director}</p>
          <h3>Ratings</h3>
          <ul>
            {movie.Ratings?.map((rating, index) =>
             <li key={index}>
               {Rating.Source}:{Rating.Value}
             </li>)}
          </ul>
        </div>
      </div>
    </div>
      );

}
export default MovieDetails;