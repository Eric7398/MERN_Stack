import React, { useState } from 'react';


function PokeDex() {
    const [pokedata, setPokedata] = useState([]);

    const getPokedata = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807 ")
            .then(response => response.json())
            .then(response => setPokedata(response.results));
    };



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