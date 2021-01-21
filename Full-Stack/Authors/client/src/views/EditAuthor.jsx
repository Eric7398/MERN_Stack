import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

export default (props) => {
    const { id, } = props;
    const [errors, setErrors] = useState([]);

    const editAuthor = formData => {
        axios.put('http://localhost:8000/api/authors/' + id, formData)
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
            < AuthorForm form={editAuthor} />
        </>
    )

}