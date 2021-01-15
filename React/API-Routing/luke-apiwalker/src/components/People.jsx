import React from 'react';

function People(props) {
    const { people } = props;


    return (
        <div>
            <h3>{people.name}</h3>
            <p>Height: {people.height}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Birthday: {people.birth_year}</p>
        </div>
    )

}
export default People;