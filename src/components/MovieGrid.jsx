function MovieGrid({ movies, favorites, setFavorites }) {
  function toggleFavorite(movie) {
    setFavorites((prev) => {
      const exists = prev.find(
        (item) => item.id === movie.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...prev, movie];
    });
  }
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-5
        p-5
      "
    >
      {movies.map((movie) => {
        const isFavorite = favorites.some(
          (item) => item.id === movie.id
        );
        const imageUrl =
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return (
          <div
            key={movie.id}
            className="
              bg-zinc-900
              rounded-xl
              overflow-hidden
              text-white
              shadow-lg
            "
          >
            <img
              src={imageUrl}
              alt={movie.title}
              className="block w-full h-100 object-cover"
            />
          <div className="p-3">
            <div className=" flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {movie.title}
              </h3> <button
                  onClick={() =>
                    toggleFavorite(movie)
                  }
                  className="
                    text-2xl
                    hover:scale-125
                    transition-transform
                  "
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
                </div>

              <p className="text-zinc-400">
                {movie.release_date?.split("-")[0]}
              </p>

              <span className="text-yellow-400">
                &#9733; {movie.vote_average?.toFixed(1)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieGrid;