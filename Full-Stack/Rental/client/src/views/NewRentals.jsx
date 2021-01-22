import { useState } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router'

import React from 'react'

const NewRentals = () => {
    const [address, setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // check box for construction is initially unchecked
    const [newConstruction, setNewConstruction] = useState(false);
    const [propertyType, setPropertyType] = useState('')

    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("default prevented!")
        setErrors([]); // resetting errors so it goes away
        console.log(address, imageUrl, newConstruction, propertyType);

        //API for creating new data from form
        axios.post('http://localhost:8000/api/rentals', {
            address,
            imageUrl,
            newConstruction,
            propertyType
        }) //returns a promise
            .then(() => navigate('/')) // dont care about the data because its sent 
            .catch(err => {
                // the algo that goes behind getting the errors from json!
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)


            })
    }


    return (
        <div>
            {errors.map((err, idx) => <p key={idx} style={{ color: 'red' }}>{err}</p>)}
            <h1>Add a Rental</h1>
            {/* by default, submits a GET request to the same page */}
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Address</label>
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </div>

                <div>
                    <label>Image URL</label>
                    <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </div>

                <div>
                    <label>New Construction</label>
                    <input type="checkbox" checked={newConstruction} onChange={e => setNewConstruction(e.target.checked)} />
                </div>

                <div>
                    <label>Property Type</label>
                    <select value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                        <option>Please Select</option>
                        <option value="Single Family">Single Family</option>
                        <option value="Condo">Condo</option>
                        <option value="Apartment">Apartment</option>
                    </select>
                </div>

                <button>Submit!</button>




            </form>
        </div>
    )
}

export default NewRentals
