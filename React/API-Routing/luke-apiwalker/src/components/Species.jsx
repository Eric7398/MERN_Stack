import React from 'react';

function Species(props) {
    const { species } = props;

    return (
        <div>
            <h3>{species.name}</h3>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Language: {species.language}</p>
            <p>Average Height: {species.average_height}</p>
            <p>Average Lifespan: {species.average_lifespan}</p>
        </div>
    )

}
export default Species;