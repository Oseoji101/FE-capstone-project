import React from 'react';
function SearchBar({searchTerm, onSearchChange}) {
    return (
        <div className='w-50 flex flex-col sm:flex-row items-center justify-center gap-2 mb-6'>
            <input 
            type="text"
            value={searchTerm}
            onChange={(e)=>onSearchChange(e.target.value)}
            placeholder='🔎Search for a movie...'
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            />

        </div>

    );
}
export default SearchBar;