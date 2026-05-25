"What is infinite scroll and debouncing, explain with simple example"

"How to import from api key from .env"

"how to use grid in tailwind css"

"The movie failed to fetch 
is this wrong 
TMDB_API_KEY= //in .env
const API_KEY = import.meta.env.TMDB_API_KEY; //in tmdb.js 
console.log(import.meta.env.TMDB_API_KEY);
"
" What is the issue here , when I search for a single movie the movie card gets very big, I want the size of the card to stay as it is when all the movies are being displayed, 
function MovieGrid({ movies }) {
  return (
    <div
      className="
        grid
        grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
        gap-5
        p-5
      "
    >
      {movies.map((movie) => {
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
              hover:scale-105
              transition-transform
              duration-300
            "
          >
            <img
              src={imageUrl}
              alt={movie.title}
              className="block w-full h-100 object-cover"
            />

            <div className="p-3">
              <h3 className="text-lg font-semibold">
                {movie.title}
              </h3>

              <p className="text-zinc-400">
                {movie.release_date?.split("-")[0]}
              </p>

              <span className="text-yellow-400">
                &#9733; {movie.vote_average}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieGrid;"

"How do I pass data between a parent and child component using props?"

"How do I organize my API fetch functions into a separate service file?"

"How do I build a controlled input in React that updates state as the user types?"

"Why is it bad to make an API call on every keystroke, and simple logic behind debouncing?"

"How do I cancel a stale API request when the user types again before it finishes?"

"What is the Intersection Observer API and how does it work?"

"How do I append new pages of data to an existing list without replacing it?"

"How do I read from localStorage as the initial value of a useState hook?"

"How do I add multiple pages to a React app using React Router?"

"How do I show an empty state message when favorites list has no items?"

"What is useRef and when should I use it instead of useState?"

"Setting environment variable in vercel?"