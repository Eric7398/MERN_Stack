import React from 'react';

function Starship(props) {
    const { starship } = props;

    return (
        <div>
            <h4>{starship.name}</h4>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
            <p>Crew: {starship.crew}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            <p>Starship Class: {starship.starship_class}</p>
        </div>
    )

}
export default Starship;