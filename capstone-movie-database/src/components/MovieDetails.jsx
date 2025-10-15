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
    return <p className="text-center mt-10">Movie details unavailable...</p>
  }
      return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow mt-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
          <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">Back to movies </Link>
        
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{movie.Title}</h2>

          <div  className="flex-shrink-0 mx-auto md:mx-0 md:w-1/3">
          <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded-lg"/>
          <p className="text-gray-700 mb-2"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="text-gray-700 mb-2"><strong>Genre:</strong>{movie.Genre}</p>
          <p className="text-gray-700 mb-2"><strong>Movie Summary:</strong>{movie.Summary}</p>
          <p className="text-gray-700 mb-2"><strong>Director:</strong>{movie.Director}</p>
          <p className="text-gray-700 mb-2"><strong>Writer:</strong> {movie.Writer}</p>
          <p className="text-gray-700 mb-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="text-gray-700 mb-2"><strong>Release Year:</strong>{movie.Year}</p>
          <p className="text-gray-700 mb-2"><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className="text-gray-700 mb-2"><strong>Language:</strong>{movie.Language}</p>
          <p className="text-gray-700 mb-2"><strong>Awards:</strong>{movie.Awards}</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-900">Ratings</h3>
          <ul className="list-disc list-inside text-gray-600">
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