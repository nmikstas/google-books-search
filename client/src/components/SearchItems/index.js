import React from "react";
import "./style.css";

const SearchItems = ({children}) =>
{
    return (
        <div className="search-body mt-2 py-2 pl-3">
           {children}
        </div>
    );
}

export default SearchItems;