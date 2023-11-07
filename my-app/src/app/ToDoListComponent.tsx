"use client";
import React, { ChangeEvent, useCallback, useState } from 'react';
import TodoTask from "./toDoTask";
import { ITask } from "./interfaces";

export default function ToDoListComponent() {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName != taskNameToDelete;
            })
        );
    };

    return (
        <section>
            <div className="container">
                <h3 className="title">To do list</h3>
                <div className="main-container">
                    <div className="type-field">
                        <input type="text"
                            name="task"
                            value={task}
                            onChange={handleChange} aria-label="text" id="field" className="form-control" placeholder="Write here..." />
                        <input
                            type="number"
                            placeholder="Deadline (in Days)..."
                            name="deadline"
                            value={deadline}
                            onChange={handleChange}
                        />
                        <button className="add-button">+ Add</button>
                    </div>
                    <div className="list-container">
                        {todoList.map((task: ITask, key: number) => {
                            return <TodoTask key={key} task={task} completeTask={completeTask} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}