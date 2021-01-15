import React from 'react';

function Planet(props) {
    const { planet } = props;


    return (
        <div>
            <h3 >{planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Gavity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
        </div>
    )

}
export default Planet;