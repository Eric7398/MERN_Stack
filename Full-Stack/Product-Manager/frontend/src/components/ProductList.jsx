import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


export default (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
            });
    }, [products]);

    // const removeFromDom = (productID) => {

    // }

    // const {removeFromDom} = props;

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then(res => {
                console.log(res);
                setProducts(products.filter(product => product._id != productID))
            })
    }

    return (
        <div>
            <h2>ALL PRODUCTS</h2>

            {products.map((product, idx) => {

                return (
                    <p key={idx}>

                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <br />
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                        <br />
                        <DeleteButton productID={product._id} successCallback={deleteProduct} />

                    </p>
                )
            })}

        </div>
    )
}