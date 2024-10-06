import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const testTracks = [
    {
        "title": "do re mi", 
        "artist": "blackbear", 
        "album": "digital druglord",
        "id": "01"
    },
    {
        "title": "video games", 
        "artist": "lana del rey", 
        "album": "born to die",
        "id": "02"
    },
    {
        "title": "copycat", 
        "artist": "billie eilish", 
        "album": "dont smile at me",
        "id": "03"
    },
    {
        "title": "castle", 
        "artist": "halsey", 
        "album": "badlands",
        "id": "04"
    }
  ];

  function handleSearchInput(e) {
    const searchInput = e.target.value.toLowerCase();
    e.preventDefault();
    setSearchInput(searchInput);

    const searchResults = testTracks.filter((item) =>
      item.title.toLowerCase().includes(searchInput)
    );

    setSearchResults(searchResults);
  }

  return (
    <div>
      <input 
        type="text"
        placeholder={"Search for a song here"}
        onChange={handleSearchInput}
        value={searchInput}
      />

      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((item) => (
            <li key={item.id}><a href="#"> {item.title}</a></li>
          ))
        ) : (
          <li>No matching results</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
