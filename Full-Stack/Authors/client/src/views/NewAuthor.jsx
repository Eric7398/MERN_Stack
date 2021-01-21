import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

export default () => {
    const [errors, setErrors] = useState([]);

    const createAuthor = formData => {
        axios.post('http://localhost:8000/api/new', formData)
            .then(res => { navigate('/') })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            { errors ? errors.map((err, index) => <p key={index}>{err}</p>) : ""}
            < AuthorForm form={createAuthor} />
        </>
    )

}