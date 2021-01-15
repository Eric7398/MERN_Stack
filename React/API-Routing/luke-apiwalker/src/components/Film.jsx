import React from 'react';

function Film(props) {
    const { film } = props;

    return (
        <div>
            <h3>{film.title}</h3>
            <p>Episode: {film.episode_id}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
        </div>
    )

}
export default Film;