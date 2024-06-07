import React, { useRef, useEffect } from 'react';

const SearchBar = React.memo(({ query, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar mb-3">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
});

export default SearchBar;
