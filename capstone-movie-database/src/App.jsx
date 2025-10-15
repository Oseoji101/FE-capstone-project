import { useState } from 'react'
import './App.css'
import MovieList from './components/movie-list'
import SearchBar from './components/SearchBar'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  

  return (
    <>
      <div>
      
        <Router className="min-h-screen bg-gray-600 text-gray-900">
          <Routes className="max-w-7xl mx-auto p-5">
            <Route path='/' element={
              <>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
                <MovieList searchTerm={searchTerm} />            
              </>
            }
              />
            <Route path='/movies/:id' element={<MovieDetails/>} />
          </Routes>
        </Router>    
        
      </div>
    </>
  )
}

export default App;
