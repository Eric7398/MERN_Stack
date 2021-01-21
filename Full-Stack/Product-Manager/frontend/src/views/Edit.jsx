import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function Edit({ id }) {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`).then((res) => {
            setProduct(...res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        });
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            })
            .then((res) => console.log(res))
            .then(() => navigate("/"))
            .catch((err) => console.log("Something went wrong: ", err));
    };

    return (
        <div>
            <h2>Edit a Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder={product.title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        placeholder={product.price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        placeholder={product.description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </p>
                <button className="btn btn-outline-warning btn-sm">Save Edit</button>
            </form>
        </div>
    );
};

export default Edit;