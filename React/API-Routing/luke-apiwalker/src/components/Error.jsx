import React from 'react';

function Error(props) {
    const { error } = props;

    return (
        <div>
            <h3 style={{ color: "red" }}>{error}</h3>
            <img src="https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/OBI-WAN-902890.jpg" alt="Obi-Wan" />

        </div >

    )


}
export default Error;