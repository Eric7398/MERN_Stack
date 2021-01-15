import React from 'react';

function Vehicle(props) {
    const { vehicle } = props;

    return (
        <div>
            <h4>{vehicle.name}</h4>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Cost in Credits: {vehicle.cost_in_credits}</p>
            <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
            <p>Crew: {vehicle.crew}</p>
            <p>Passengers: {vehicle.passengers}</p>
            <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
        </div>
    )

}
export default Vehicle;