import MovieGrid from "../components/MovieGrid";

export default function Favorites({ favorites, setFavorites }) {
  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-zinc-400 gap-2">
        <p className="text-lg">No movie added to favorites.</p>
        <p className="text-sm">Tap the ♡ icon to favorite a movie.</p>
      </div>
    );
  }

  return (
    <MovieGrid
      movies={favorites}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
}