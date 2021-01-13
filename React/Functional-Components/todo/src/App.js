import './App.css';
import react, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodosList from './components/TodosList';

function App() {

  const [todos, setTodos] = useState([
    {
      body: "Create todo list",
      completed: false,
    },

    {
      body: "Laundry",
      completed: true,
    },

    {
      body: "Buy more garlic",
      completed: false,
    },
  ]);

  const updateTodo = (idx) => {
    const copyTodos = [...todos];
    // If true then false, if false then true.
    copyTodos[idx].completed = !copyTodos[idx].completed;

    setTodos(copyTodos);
  }


  const deleteTodo = (deletedIdx) => {
    const copyTodos = todos.filter((todos, idx) => {
      if (idx !== deletedIdx) {
        return true;
      }
      return false;
    });

    setTodos(copyTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo])

  }

  return (
    <div className="App">
      <h1>App</h1>
      <NewTodo createTodo={createTodo} />
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
