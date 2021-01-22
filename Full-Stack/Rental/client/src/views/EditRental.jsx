import { useState, useEffect } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router'

import React from 'react'

const EditRentals = (props) => {
    const [address, setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // check box for construction is initially unchecked
    const [newConstruction, setNewConstruction] = useState(false);
    const [propertyType, setPropertyType] = useState('')

    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([]);


    // useEffect to prepopulate data in form!!
    useEffect(() => {
        axios.get('http://localhost:8000/api/rentals/' + props.id)
            .then(response => {
                const { data } = response
                console.log(data.address)

                setAddress(data.address);
                setImageUrl(data.imageUrl);
                setNewConstruction(data.newConstruction);
                setPropertyType(data.propertyType);

                setLoaded(true);
            })
    }, [])



    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]); // resetting errors so it goes away

        //API for creating new data from form
        axios.put('http://localhost:8000/api/rentals/' + props.id, {
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

    if (!loaded) return 'Loading...'

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

export default EditRentals
