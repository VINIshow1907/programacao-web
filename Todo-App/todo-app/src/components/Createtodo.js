import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

function CreateTodo() {
    const [Subject, setSubject] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Subject !== "") {
            await addDoc(collection(db, "todos"), {
                Subject,
                completed: false,
            });
            setSubject(""); 
        }
    }

    return (
        <form onSubmit={handleSubmit} className="Todo-container">
            <input 
                type="text" 
                placeholder='O que você quer cadastrar?'
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                className="Todo-input"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default CreateTodo;
