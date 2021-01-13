import React, { useState } from 'react';

const TodoItem = ({ todo, idx }) => {

    return (
        <p>{todo.body}: <input type="checkbox" checked={todo.completed} /></p>
    )

}

export default TodoItem;