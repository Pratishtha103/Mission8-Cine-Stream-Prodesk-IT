import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);
  return (
    <BrowserRouter>
      <nav className="flex gap-6 p-4 bg-zinc-900 text-white">
        <p className='font-semibold'>Cine Stream</p>
        <Link className=" hover:underline" to="/">Home</Link>
        <Link className=" hover:underline" to="/favorites">Favorites</Link>
      </nav>
      <div className="min-h-screen bg-black text-white p-3">
        <Routes>
          <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    )
}

export default App;