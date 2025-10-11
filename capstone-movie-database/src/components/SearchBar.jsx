import React from 'react';

function SearchBar({searchTerm, onSearchChange}) {
    return (
        <div>
            <input 
            type="text"
            value={searchTerm}
            onChange={(e)=>onSearchChange(e.target.value)}
            placeholder='🔎Enter movie name here'
            
            />

            <button type="button">Search</button>
        </div>

    );
}
export default SearchBar;