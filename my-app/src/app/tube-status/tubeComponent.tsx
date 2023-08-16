/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { tubeStatus, statusColors, tubeLines } from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './tubeStatus.css';

export default function TubeComponent() {
    const [colorStatus, setColor] = useState(statusColors);
    const [lines] = useState(tubeLines);

    const selectColor = useCallback((color: statusColors) => {

    }, []);

    return (
        <section id="main" className="d-flex">
            <div className="tube-container">
                <table className="tube-table">
                    <thead>
                        <tr>
                            <th scope="col">Line name</th>
                            <th scope="col">Line status</th>
                        </tr>
                    </thead>
                    <tbody className="tube-body">
                        {
                            lines.map((line, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="tube-lines">{line.name}</td>
                                        <td className="tube-status">{line.status}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}