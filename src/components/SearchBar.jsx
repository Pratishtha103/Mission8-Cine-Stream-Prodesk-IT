function SearchBar({ query, setQuery }) {
  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="
          w-full
          p-3
          rounded-lg
          bg-zinc-800
          text-white
          outline-none
        "
      />
    </div>
  );
}

export default SearchBar;