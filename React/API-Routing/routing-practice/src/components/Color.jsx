import React from 'react';

function Color(props) {

    return (
        <div>
            <h1 style={{ color: props.tcolor, backgroundColor: props.bgcolor }}>The word is: {props.word}</h1>

        </div>

    )


}
export default Color;