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



  return (
    <div className="App">
      <h1>App</h1>
      <NewTodo />
      <TodosList todos={todos} />
    </div>
  );
}

export default App;
