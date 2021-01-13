import React, { useState } from 'react';

const NewTodo = ({ createTodo }) => {

    const [todoText, setTodoText] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        createTodo({
            'body': todoText,
            'completed': false,
        })

        setTodoText("");
    }

    return (
        <>
            <form onSubmit={submitTodo}>
                <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <input type="submit" value="Create Todo" />
            </form>
        </>
    )

}

export default NewTodo;