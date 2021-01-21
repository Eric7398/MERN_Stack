import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
                console.log(res.data);
            })
            .catch(err => console.log("Not working. Come back soon."))
    }, []);

    const setAllAuthors = (filteredAuthors) => {
        setAuthors(filteredAuthors)
    }

    return (

        <>
            {loaded && <AuthorList authors={authors} allAuthors={setAllAuthors} />}
        </>
    )
}