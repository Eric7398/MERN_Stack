import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { fname, lname, age, hairColor } = this.props;
        return (
            <div>
                <h1>{fname} {lname}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;