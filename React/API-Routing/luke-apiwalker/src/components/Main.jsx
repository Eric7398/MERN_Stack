import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import People from './People';
import Planet from './Planet';
import Film from './Film';
import Species from './Species';
import Vehicle from './Vehicle';
import Starship from './Starship';
import Error from './Error';

function Main(props) {
    const [people, setPeople] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [film, setFilm] = useState(null);
    const [species, setSpecies] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [starship, setStarship] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.choice}/${props.id}/`)
            .then(response => {
                if (props.choice === "people") {
                    setPeople(response.data);
                }
                else if (props.choice === "planets") {
                    setPlanet(response.data);
                }
                else if (props.choice === "films") {
                    setFilm(response.data);
                }
                else if (props.choice === "species") {
                    setSpecies(response.data);
                }
                else if (props.choice === "vehicles") {
                    setVehicle(response.data);
                }
                else if (props.choice === "starships") {
                    setStarship(response.data);
                }
            })
            .catch(() => {
                setError("You were supposed to destroy the sith not join them!");
            })
    }, [props.id, props.choice])

    return (
        <div>
            {
                people ? <People people={people} /> : null
            }
            {
                planet ? <Planet planet={planet} /> : null
            }
            {
                film ? <Film film={film} /> : null
            }
            {
                species ? <Species species={species} /> : null
            }
            {
                vehicle ? <Vehicle vehicle={vehicle} /> : null
            }
            {
                starship ? <Starship starship={starship} /> : null
            }
            {
                error ? <Error error={error} /> : null
            }


        </div>
    )

}
export default Main;