import React from "react";
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo, }) {
  return (
    <div className = "todo" style={{ textDecoration: todo.status ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>v</button> 
        
        <button onClick={() => removeTodo(index)}>x</button> 
      </div>
    </div>
  )
}

function TodoForm ({addTodo}) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}>
      </input>
    </form>
  );
}
function App(){
  const [todos, setTodos]=React.useState([
    { 
      text: "learn about react",
      status: false
    },
    { 
      text: "Meet friends for lunch",
      status: false
    },
    { 
      text: "build cool todo app", 
      status: false
    }
  ]);

  //How to Create
  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  //How to Update
  const complateTodo = index => {
    const newTodos = [...todos];
    newTodos[index].status=true;
    setTodos(newTodos);
  };

  //How to Delet
  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index)=>(
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={complateTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;