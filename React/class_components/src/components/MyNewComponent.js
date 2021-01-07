import React, { Component } from 'react';


class Header extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                <h1>My name is {firstName}  {lastName}</h1>
            </div>
        );
    }
}

export default Header;