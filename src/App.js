import React, {useEffect, useState} from 'react';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_API;

export default function App() {
  const [images, setImages] = useState([]);
  
  // Unsplash API
  const count = 10;
  // Utilizing a Free UnSplash API key; please see https://unsplash.com/developers to create your own
  const apiKey = accessKey;
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(setImages);
  }, []);

  // check for API
  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">API not found: Please apply for one</a>
    )
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}
