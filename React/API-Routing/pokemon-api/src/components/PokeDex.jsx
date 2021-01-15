import React, { useState } from 'react';



function PokeDex() {
    const [pokedata, setPokedata] = useState([]);


    //useEffect renders all without clicking button...
    //Fetch Method

    const getPokedata = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807 ")
            .then(response => response.json())
            .then(response => setPokedata(response.results));
    };


    //The key is called data for axios and pokeAPI's object is called results so to access that it would be response.data.results
    //Axios Method

    // const getPokedata = () => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //         .then(response => setPokedata(response.data.results))
    // };

    return (
        <div>
            <button className="btn btn-outline-danger" onClick={getPokedata}>Fetch Pokemon</button>
            {pokedata.map((poke, idx) => {
                return <p key={idx}>{poke.name}</p>
            })}
        </div>
    );
}

export default PokeDex;