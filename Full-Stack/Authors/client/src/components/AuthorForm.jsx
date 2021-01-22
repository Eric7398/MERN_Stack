import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { form } = props;
    const [name, setName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        form({ name });
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h4>Add a new author:</h4>
            <form onSubmit={onSubmitHandler} >
                <p>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <button Link to={"/"}>Cancel</button>
                <button> Submit</button>
            </form>
        </>
    )
}