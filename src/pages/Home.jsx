import { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import { useRef } from "react";
import {
  fetchPopularMovies,
  searchMovies,
} from "../services/tmdb";

function Home({ favorites, setFavorites }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const observerRef = useRef();
  const initialLoad = useRef(true);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  async function loadPopularMovies(page) {
    try {
      setLoading(true);
      const data = await fetchPopularMovies(page);
      setMovies((prev) => page === 1 ? data.results : [...prev, ...data.results]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(query) {
    try {
      setLoading(true);

      const data = await searchMovies(query);

      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  // Debounce and search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) {
        setMovies([]);
        handleSearch(query);
      } else {
        setMovies([]);
        setPage(1);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (initialLoad.current) { initialLoad.current = false; return; }
        if (entry.isIntersecting && !loading && !query.trim()) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0, rootMargin: "200px" }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading, query]);

  // Load popular
  useEffect(() => {
    if (query.trim()) return;
    loadPopularMovies(page);
  }, [page]);

  return (
    <div>
        <SearchBar query={query} setQuery={setQuery}/>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}
        {
          !loading &&
          movies.length === 0 && (
            <p className="p-5">
              No movies found.
            </p>
          )
        }
        <MovieGrid movies={movies} favorites={favorites} setFavorites={setFavorites}/>
        <div ref={observerRef}></div>
    </div>
  );
}

export default Home;