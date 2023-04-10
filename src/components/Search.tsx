function Search() {
  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full rounded-lg border border-base-300 bg-base-200 p-4 pl-10 text-sm text-base-content placeholder:text-base-content focus:outline-none"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-content hover:bg-accent-focus focus:outline-none focus:ring-1 focus:ring-accent"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
