import React from "react";
import SearchBar from "../components/SearchBar";
import SearchItems from "../components/SearchItems";
import SearchItem from "../components/SearchItem";
import API from "../utils/API";

class Search extends React.Component
{
    state =
    {
        searchText: "",
        searchResults: [],
        saveStatus: []
    };

    clickSave = (index) =>
    {
        let saveStatus = [...this.state.saveStatus];
        let bookData = {};

        //Get the book data.
        bookData =
        {
                authors: this.state.searchResults[index].volumeInfo.authors ? 
                    this.state.searchResults[index].volumeInfo.authors : "N/A",
                description: this.state.searchResults[index].volumeInfo.description ?
                    this.state.searchResults[index].volumeInfo.description : "N/A",
                image: this.state.searchResults[index].volumeInfo.imageLinks ?
                    this.state.searchResults[index].volumeInfo.imageLinks.smallThumbnail : "N/A",
                link: this.state.searchResults[index].volumeInfo.infoLink ?
                    this.state.searchResults[index].volumeInfo.infoLink : "N/A",
                title: this.state.searchResults[index].volumeInfo.title ?
                    this.state.searchResults[index].volumeInfo.title : "N/A"
        }
        
        API.getBook(bookData.title)
        .then(res =>
        {
            //Check if book is already in the database by title.
            if(res.data.length)
            {
                saveStatus[index] = "Already in Database";
                this.setState({ saveStatus: saveStatus });
            }
            else
            {
                //Not in the database. Save it.
                API.saveBook(bookData)
                .then(res =>
                {
                    saveStatus[index] = "Saved";
                    this.setState({ saveStatus: saveStatus });
                })
                .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
    }

    //Go to the information website.
    clickView = (index) =>
    {
        window.location.href = this.state.searchResults[index].volumeInfo.infoLink;
    }

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
            //Only save data if it exists.
            if(res.data.items)
            {
                let saveStatus = [];

                //Clear the save status array.
                for(let i = 0; i < res.data.items.length; i++)
                {
                    saveStatus.push(" ");
                }

                this.setState(
                {
                    searchResults: res.data.items, 
                    saveStatus: saveStatus
                });
            }
            else
            {
                this.setState(
                { 
                    searchResults: [],
                    saveStatus: []
                });
            }

            console.log(res.data.items);
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
                    <h4>Search Results</h4>
                    {this.state.searchResults.length ? 
                    (
                        this.state.searchResults.map((book, i) => (
                            <SearchItem
                                key={i}
                                id={i}
                                save={this.clickSave}
                                view={this.clickView}
                                status={this.state.saveStatus[i]} 
                                authors={book.volumeInfo.authors ? book.volumeInfo.authors : "N/A"}
                                description={book.volumeInfo.description ? book.volumeInfo.description : "N/A"}
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "N/A"}
                                link={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "#"}
                                title={book.volumeInfo.title ? book.volumeInfo.title : "N/A"}
                            />
                        ))
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </SearchItems>
            </div>
        );
    }
}

export default Search;