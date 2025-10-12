import { useState } from 'react'
import './App.css'
import MovieList from './components/movie-list'
import SearchBar from './components/SearchBar'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MovieCard from './components/MovieCard'
function App() {
  

  return (
    <>
      <div>
        <SearchBar />
      
        <Router>
          <Routes>
            <Route path='/' element={<MovieList />}></Route>
            <Route path='/movies/:id' element={<MovieDetails/>}></Route>
          </Routes>
        </Router>    
        
      </div>
    </>
  )
}

export default App;
