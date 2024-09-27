import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
  
const [newTitle, setNewTitle] = useState(todo.Subject);

  
  useEffect(() => {
    setNewTitle(todo.Subject);
  }, [todo]);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className="todo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <input
        style={{ 
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
          marginRight: '10px' 
        }}
        type="text"
        value={newTitle}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button className="confirm" onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id="i" />
        </button>
        <button className="edit" onClick={() => handleEdit(todo, newTitle)}>
          <EditIcon id="i" />
        </button>
        <button className="delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
