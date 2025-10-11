import { useState } from 'react'
import './App.css'
import MovieList from './components/movie-list'
import SearchBar from './components/SearchBar'

function App() {
  

  return (
    <>
      <div>
        <MovieList />
        <SearchBar />
        
      </div>
    </>
  )
}

export default App
