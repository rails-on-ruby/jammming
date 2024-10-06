import logo2 from './logo2.png';
import './App.css';
import SearchBar from './SearchBar.js'
import {useState} from 'react';

// import { RouterProvider, createBrowserRouter }from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo2}  />
      </div>

      <header className="App-header">
        <h1>jammming</h1>
        <p>spotify playlist app</p>
        <form>
          <SearchBar />
          <button id="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;

// <RouterProvider router={router} /> 