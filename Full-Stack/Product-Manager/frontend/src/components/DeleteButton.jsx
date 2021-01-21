import React from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';

export default (props) => {

    const { productID, successCallback } = props;

    // const deleteProduct = (e) => {
    //     axios.delete(`http://localhost:8000/api/products/${productID}`)
    //     .then(res => {
    //         successCallback();

    //     })
    // }

    const handleClick = () => {
        successCallback(productID);
    }

    return (
        <>
            <button onClick={handleClick}>
                Delete
            </button>
        </>
    )
}