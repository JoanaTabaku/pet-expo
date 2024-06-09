import React, { useRef, useEffect } from 'react';
const SearchBar = React.memo(({ onChangeValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar mb-3 w-75 m-auto">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by name..."
        onChange={onChangeValue}
        className="form-control"
      />
    </div>
  );
});

export default SearchBar;