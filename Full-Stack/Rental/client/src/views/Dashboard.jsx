import { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router';
// useState allows us to manage state
// useEffect allows us to make request on load

import axios from 'axios'
// for making API requests we


function Dashboard() {
    const [rentals, setRentals] = useState(null);

    // useEffect is for when page is rendered and you want to show that API call
    useEffect(() => {
        axios.get('http://localhost:8000/api/rentals') // promise that we are getting
            .then(response => setRentals(response.data))
    }, [])
    // empty array means run this only on the first render


    if (rentals == null) return 'Loading....' // show the user we're waiting for the promise


    function handleLike(index) {
        console.log("Updating Rental index number of: ", index)
        const rentalToUpdate = rentals[index];
        axios.post('http://localhost:8000/api/rentals/' + rentalToUpdate._id + '/likes')
            .then(response => {
                const updatedRental = response.data;

                const clonedRentals = rentals.slice(); // avoid mutating the current array, slice makes a copy of current rentals 

                // out of all the rentals only target the updated Rentals to the specific rentals we changed with index number as a way of locating it
                clonedRentals[index] = updatedRental;
                // setRentals allows us to update the page with new information
                setRentals(clonedRentals);
            });
    }


    function handleDelete(id) {
        console.log(id)

        axios.delete('http://localhost:8000/api/rentals/' + id)
            .then(() => {
                // get all the rentals ids to a new filtered array except for the one that matches to id passed in (frontend side)
                const filtered = rentals.filter(rental => rental._id !== id);
                setRentals(filtered); // tells React to re-render and BOOM done
                alert('Rental Deleted!')
            })




    }


    return (
        <div>
            <h1>Rentals</h1>

            {rentals.map((r, idx) => (

                <div key={r._id}>

                    <img src={r.imageUrl} alt={r.address} width="350" />
                    <p>{r.address}</p>
                    <p><b>{r.propertyType}</b></p>
                    {r.newConstruction ? <p><b>New Construction</b></p> : null}
                    <p>{r.likes} Likes</p>
                    <button onClick={() => navigate('/rentals/' + r._id + '/edit')}>Edit</button>
                    <button onClick={() => handleLike(idx)}>Like</button>
                    <button onClick={() => handleDelete(r._id)}>Delete</button>

                </div>

            ))}
            <Link to="/rentals/new">Add New</Link>

        </div>
    )
}


export default Dashboard;