import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";


function Detail({ id }) {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(...res.data));
    }, []);

    const deleteProduct = (e) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => navigate(`/`))
            .catch((err) => console.log("Something went wrong: ", err));
    };

    return (
        <div>
            <h6>{product.title}</h6>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-sm btn-info">
                <Link to={`/${id}/edit`}>Edit</Link>
            </button>
            <button className="btn btn-outline-danger btn-sm" onClick={deleteProduct}> Delete </button>
        </div>
    );
};
export default Detail;