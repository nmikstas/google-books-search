import React from "react";
import "./style.css";

const SearchBar = (props) =>
{
    return (
        <div className="search-container mt-2 px-2">
            <form className="form">
                <label htmlFor="search-input">
                    <p className="pl-2 pt-2">Book Search</p>
                </label>
                <input type="text" className="form-control" id="search-input" onChange={props.inputChange} value={props.searchValue} placeholder="Search Google Books Here..." />
                <div className="text-right">
                    <input type="submit" className="btn btn-outline-secondary my-2" id="search-btn" onClick={props.submit} value="Search" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
