"use client";
import React, { useCallback, useState } from 'react';

export default function ToDoListComponent() {
    return (
        <section>
            <div className="container">
                <h3 className="title">To do list</h3>
                <div className="main-container">
                    <div className="type-field">
                        <input aria-label="text" type="text" id="field" className="form-control" placeholder="Write here..." />
                        <a className="add-button">+ Add</a>
                    </div>
                    <div className="list-container">
                        <ul className="list-main">
                            <li className="list-item"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}