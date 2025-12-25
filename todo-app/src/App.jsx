
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (todo.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = todo;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, todo]);
    }

    setTodo("");
  };

  return (
    <div className="app">
      {/* background shapes */}
      <div className="blob pink"></div>
      <div className="blob blue"></div>
      <div className="blob yellow"></div>

      <div className="todo-box">
        <h1>✨TODO APP</h1>

        <div className="input-area">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Write your task..."
          />
          <button onClick={handleAddOrUpdate}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {todos.map((item, i) => (
            <li key={i}>
              <span>{item}</span>
              <div className="actions">
                <button
                  className="edit"
                  onClick={() => {
                    setTodo(item);
                    setEditIndex(i);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() =>
                    setTodos(todos.filter((_, index) => index !== i))
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
