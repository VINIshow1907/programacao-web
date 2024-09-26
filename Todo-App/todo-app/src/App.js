import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import CreateTodo from './components/Createtodo.js';
import Todo from './components/Todo.js';
import TodoSubject from './components/TodoSubject.js';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './Firebase';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, Subject) => {
    await updateDoc(doc(db, "todos", todo.id), { Subject: Subject });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  return (
    <>
      <TodoSubject />
      
      <CreateTodo />
      {
        todos.map((item) => (
          <Todo
            todo={item}
            toggleComplete={toggleComplete}
             handleDelete={handleDelete}
             handleEdit ={handleEdit}
             key={item.id}
          />
        ))
      }
      
    </>
  );
}

export default App;