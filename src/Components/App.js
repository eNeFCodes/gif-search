import React, { useState, useEffect, useContext } from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

import { EnvironmentContext } from './Context';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('code');
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  const { API_KEY } = useContext(EnvironmentContext) || '';

  useEffect(() => {
    // Be sure to add your API key
    axios(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${API_KEY}`)
      .then(response => setData(response.data.data))
      .catch(error => console.log('Error fetching and parsing data', error))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {
          isLoading
            ? <p>Loading...</p>
            : <GifList data={data} />
        }
      </div>
    </>
  );
}

export default App

