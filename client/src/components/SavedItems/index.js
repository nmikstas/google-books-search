import React from "react";
import "./style.css";

const SavedItems = ({children}) =>
{
    return (
        <div className="save-body mt-2 py-2 pl-3">
           {children}
        </div>
    );
}

export default SavedItems;