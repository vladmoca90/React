"use client";
import React, { useCallback, useState } from 'react';

interface item {
    completed: boolean;
    id: number;
    text: string;
}

export default function ToDoListComponent() {
    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: 'Learn Typescript with George', completed: false },
        { id: 2, text: 'Build To Do List', completed: false }
    ]);

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        )
    }

    return (
        <section>
            <div className="container">
                <h3 className="title">To do list</h3>
                <div className="main-container">
                    <div className="type-field">
                        <input aria-label="text" type="text" id="field" className="form-control" placeholder="Write here..." />
                        <button className="add-button">+ Add</button>
                    </div>
                    <div className="list-container">
                        <ul className="list-main">
                            {
                                todos.map((todo) => {
                                    <li key={todo.id} onClick={() => handleToggle(todo.id)} className="list-item">{todo.text}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}