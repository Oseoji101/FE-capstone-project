import {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState();
  const {id} = useParams();


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5eef6005`)
        const data = await response.json();
        setMovie(data);
      }catch (error) {
          console.error("Error fetching movie details:", error);
        }

    } 
    fetchMovieDetails();
  },[id]);

  if(!movie) {
    return <p>Loading movie details...</p>
  }
      return (
    <div>
      <div>
          <Link to="/">Back to movies </Link>
        <div>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title}/>
          <p>plot: {movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
          <p>movie summary: {movie.Summary}</p>
          <p>Director: {movie.Director}</p>
          <h3>Ratings</h3>
          <ul>
            {movie.Ratings?.map((rating, index) => (
             <li key={index}>
               {rating.Source}:{rating.Value}
             </li>
             ))}
          </ul>
        </div>
      </div>
    </div>
      );

}
export default MovieDetails;