import React, { useState } from "react";


const BoxGenerator = () => {
    const [boxes, setBoxes] = useState([]);
    const [colors, setColors] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        if (!colors) return;
        setBoxes([...boxes, colors]);

        // The value goes away but the text still shows up in the text box
        setColors("");
    };


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input type="text" onChange={(e) => setColors(e.target.value)} value={colors} />
                <input type="submit" value="Add" />
            </form>

            {boxes.map((color, idx) => (
                <p style={{ height: 100, width: 100, backgroundColor: color }} key={idx} />
            ))}

        </div>

    );
};

export default BoxGenerator;