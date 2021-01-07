import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }

    increaseAge = () => {
        this.setState({ age: this.state.age + 1 })
    };

    decreaseAge = () => {
        this.setState({ age: this.state.age - 1 })
    };


    render() {
        const { fname, lname, hairColor } = this.props;
        return (
            <div>
                <h1>{fname} {lname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>

                <button onClick={this.increaseAge}>Happy Birthday!</button>
                <button onClick={this.decreaseAge}>Rewind Time!</button>

            </div>
        )
    }
}

export default PersonCard;