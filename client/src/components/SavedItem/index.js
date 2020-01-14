import React from "react";
import "./style.css";

const SavedItem = (props) =>
{
    return (
        <div className="item-body ml-1 mr-3 my-2 p-2">
            <div className="row">
                <div className="col-md-10">
                    <p className="title">{props.title}</p>
                </div>
                <span className="align-center">
                    <span className="pl-3">
                        <button className="btn btn-outline-danger mb-2" index={props.id} onClick={() => props.delete(props.id)}>Delete</button>
                    </span>
                    <span className="px-2">
                        <button className="btn btn-outline-warning mb-2" index={props.id} onClick={() => props.view(props.id)}>View</button>
                    </span>
                    <br />
                </span>
            </div>
            
            <div className="row">
                <div className="col-md-2">
                    <img className="image" src={props.image === "N/A" ? require("./img/noImage.jpg") : props.image} />
                </div>
                <div className="col-md-10">
                    <span className="authors">Authors: </span>
                    <span className="author-names">
                    {props.authors.map((author, i) =>
                    (
                        <span key={i}>{author} </span>
                    ))}
                    </span>
                    <div className="summary">Description:</div>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SavedItem;