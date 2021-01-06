import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
    }





    render() {
        const { fname, lname, age, hairColor } = this.props;
        return (
            <div>
                <h1>{fname} {lname}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>

                <button onClick={() => alert("This button has been clicked!")}>Click Me</button>

            </div>
        )
    }
}

export default PersonCard;