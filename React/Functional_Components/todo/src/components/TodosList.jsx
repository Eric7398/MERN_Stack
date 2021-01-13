import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => {

    return (
        todos.map((todo, idx) =>

            <TodoItem todo={todo} idx={idx} key={idx} />
        )
    )
}

export default TodosList;