import React, { useState } from 'react';


const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPWError, setconfirmPWError] = useState("");

    // using input instead of e for clearification 
    const firstNameValid = input => {
        setFirstName(input.target.value);
    }
    const lastNameValid = input => {
        setLastName(input.target.value);
    }
    const emailValid = input => {
        setEmail(input.target.value);
        if (input.target.value.length < 1) {
            setEmailError("Email required!")
        } else if (input.target.value.length < 5) {
            setEmailError("Email needs more than 5 characters!")
        } else if (input.target.value.length > 5) {
            setEmailError("")
        }
    }
    const passwordValid = input => {
        setPassword(input.target.value);
        if (input.target.value.length < 1) {
            setPasswordError("Password required!")
        } else if (input.target.value.length < 5) {
            setPasswordError("Password needs more than 5 characters!")
        } else if (input.target.value.length > 5) {
            setPasswordError("")
        }
    }

    const cPWValid = input => {
        if (input.target.value === password) {
            setconfirmPWError("")
        }
        else setconfirmPWError("Passwords must match!")
    }


    const createUser = input => {
        input.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPW };
        setHasBeenSubmitted(true);
    };


    return (
        <div>
            <form onSubmit={createUser}>
                {hasBeenSubmitted
                    ?
                    <h1>Thank you for submitting the form, {firstName}!</h1>
                    :
                    <h1>Welcome, please submit the form.</h1>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={firstNameValid} />
                    {firstName.length < 2 ? <p style={{ color: 'red' }}>Please have your first name longer than 2 characters.</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={lastNameValid} />
                    {lastName.length < 2 ? <p style={{ color: 'red' }}>Please have your last name longer than 2 characters.</p> : ''}
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
                {/* Is this possible? */}
                {firstName && lastName ? <p>Full Name: {firstName} {lastName}</p> : ''}
                {email ? <p>Email: {email}</p> : ''}
                {password ? <p>Password: {password}</p> : ''}
            </div>
        </div>
    );
}

export default UserForm;