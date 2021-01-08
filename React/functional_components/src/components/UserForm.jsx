import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPWError, setconfirmPWError] = useState("");

    const firstNameValid = (input) => {
        setFirstName(input.target.value);
        if (input.target.value.length < 1 && input.target.value.length !== 0) {
            setFirstNameError("First Name Required!")
        } else if (input.target.value.length < 2 && input.target.value.length !== 0) {
            setFirstNameError("Name requires more than 2 characters!")
        } else if (input.target.value.length > 2) {
            setFirstNameError("")
        }
    }
    const lastNameValid = (input) => {
        setLastName(input.target.value);
        if (input.target.value.length < 1 && input.target.value.length !== 0) {
            setLastNameError("Last Name Required!")
        } else if (input.target.value.length < 2 && input.target.value.length !== 0) {
            setLastNameError("Name requires more than 2 characters!")
        } else if (input.target.value.length > 2) {
            setLastNameError("")
        }
    }
    const emailValid = (input) => {
        setEmail(input.target.value);
        if (input.target.value.length < 1 && input.target.value.length !== 0) {
            setEmailError("Email required!")
        } else if (input.target.value.length < 5 && input.target.value.length !== 0) {
            setEmailError("Email needs more than 5 characters!")
        } else if (input.target.value.length > 5) {
            setEmailError("")
        }
    }
    const passwordValid = (input) => {
        setPassword(input.target.value);
        if (input.target.value.length < 1 && input.target.value.length !== 0) {
            setPasswordError("Password required!")
        } else if (input.target.value.length < 5 && input.target.value.length !== 0) {
            setPasswordError("Password needs more than 5 characters!")
        } else if (input.target.value.length > 5) {
            setPasswordError("")
        }
    }

    const cPWValid = (input) => {
        if (input.target.value === password) {
            setconfirmPWError("")
        }
        else setconfirmPWError("Passwords must match!")
    }


    const createUser = (input) => {
        input.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPW };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };


    return (
        <div>
            <form onSubmit={createUser}>
                {hasBeenSubmitted ?
                    <h1><i>Thank you for submitting the form, {firstName}!</i></h1> :
                    <h1>Welcome, please submit the form.</h1>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={firstNameValid} />
                    {firstNameError ? <p style={{ color: 'red' }}>{firstNameError}</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={lastNameValid} />
                    {lastNameError ? <p style={{ color: 'red' }}>{lastNameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" onChange={emailValid} />
                    {emailError ? <p style={{ color: 'red' }}>{emailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordValid} />
                    {passwordError ? <p style={{ color: 'red' }}>{passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={cPWValid} />
                    {confirmPWError ? <p style={{ color: 'red' }}>{confirmPWError}</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Form Data</h2>
                <p>Full Name: {firstName} {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default UserForm;