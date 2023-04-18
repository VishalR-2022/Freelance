import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';

import Input from './Input';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form>
      <div className="flex h-10 rounded-full bg-base-100 px-5 pr-10 text-gray-600 ">
        <button type="submit" className="mr-3">
          <IconContext.Provider value={{ className: 'text-gray-700 text-xl' }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
        <Input
          ofType="text"
          name="search"
          value={query}
          onChange={handleQueryChange}
          className="bg-base-100 text-sm focus:outline-none"
          placeholder="Search"
          topLabel={''}
        />
      </div>
    </form>
  );
};
export default SearchBar;
