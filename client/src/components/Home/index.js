import React from "react";
import "./style.css";

const Home = () =>
{
    return (
        <div className="home-body mt-2 p-2">
           <h2>About This Project</h2>
           <p>
                This project uses an Express server on the back end along with a Mongo database. The front end was designed with React.
                The user can perform a Google Books search from the "Search" tab. The React app then talks to the server and the server
                in turn queries the Google Books database through use of the Google Books API. The results are then returned to the user
                and relevant information is displayed. The user then has the option to save any interesting books to the Mongo database.
                The user can then navigate to the "Saved" tab and view the saved books.  Books can be deleted from the database from the
                "Saved" tab.
           </p>
           <br />
           <p>
                There is logic in the front end that prohibits multiple copies of the same book to be saved into the database.  Also, 
                the user may click a "View" button on either the "Search" or "Saved" tab to be re-routed to an external site to view
                more details about the particular book.
           </p>
        </div>
    );
}

export default Home;