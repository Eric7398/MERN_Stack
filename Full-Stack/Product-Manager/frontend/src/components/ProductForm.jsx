import React, { useState } from 'react';
// import axios from 'axios';

export default (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitHandler = (e) => {
        e.preventDefault();

        onSubmitProp({ title, price, description });

        // axios.post('http://localhost:8000/api/products', {
        //     title,
        //     price,
        //     description
        // })
        // .then(res => console.log("Response: ", res))
        // .catch(err => console.log("Error: ", err))

    }

    return (
        <form onSubmit={submitHandler}>

            <p>
                <label>Title</label>
                <input
                    value={title} name="title"
                    type="text" onChange={(e) => { setTitle(e.target.value) }} />
            </p>

            <p>
                <label>Price</label>
                <input
                    value={price} name="price"
                    type="text" onChange={(e) => { setPrice(e.target.value) }} />
            </p>

            <p>
                <label>Description</label>
                <input
                    value={description} name="description"
                    type="text" onChange={(e) => { setDescription(e.target.value) }} />
            </p>

            <input type="submit" value="Create" />
        </form>
    )
}