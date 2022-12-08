import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search Article"/>
        </div>
    );
};

export default Search;