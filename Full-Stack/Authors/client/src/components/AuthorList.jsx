import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const { authors, allAuthors } = props;

    // ---- remove the author from the DOM (delete) ---- //
    const removeFromDom = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(deleted => allAuthors(
                authors.filter(deleted => deleted._id !== id)
            ))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h4>We have quotes by:</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>

                {authors.map((author, idx) => {
                    return (

                        <tbody key={idx}>
                            <tr>
                                <td >{author.name}</td>
                                <td><Link to={`/edit/${author._id}`} className="btn btn-outline-primary btn-sm"> Edit</Link>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromDom(author._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}

            </table >
        </div >
    )
}