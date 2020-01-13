import React from "react";
import SearchBar from "../components/SearchBar";
import SearchItems from "../components/SearchItems";
import API from "../utils/API";

class Search extends React.Component
{
    state =
    {
        searchText: ""
    };

    //Get the book search text.
    inputChange = (event) =>
    {
        this.setState({ searchText: event.target.value });
    }

    //Do a Google books search when the user clicks the submit button.
    submit = (event) =>
    {
        event.preventDefault();

        //Get the searched value and save it. Then erase the text box value to show responsiveness.
        let searchString = this.state.searchText;
        this.setState({ searchText: "" });
        
        API.searchBooks(searchString)
        .then(res =>
        {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    render = () =>
    {
        return (
            <div>
                <SearchBar
                    submit={this.submit}
                    inputChange={this.inputChange}
                    searchValue={this.state.searchText}
                />
                <SearchItems>

                </SearchItems>
            </div>
        );
    }
}

export default Search;