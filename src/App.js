import React from 'react';
import './App.css';

export default function App() {

  // Unsplash API
  const count = 10;
  // Utilizing a Free UnSplash API key; please see https://unsplash.com/developers to create your own
  const apiKey = REACT_APP_UNSPLASH_API;
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  console.log('before fetch');

  useEffect(() => {
    fetch(apiUrl)
      .then(console.log('successful fetch'))
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, []);
  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {[...Array(100)].map((_, index) => (
          <div className="image" key={index}>
            <img src="https://placekitten.com/g/1920/1080" alt="Sample" />
          </div>
        ))}
      </div>
    </div>
  );
}
