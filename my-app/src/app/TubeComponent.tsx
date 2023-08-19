/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { tubeLines } from './data';

export default function TubeComponent() {
    const [lines] = useState(tubeLines);

    return (
        <div id="main" className="d-flex">
            <div className="tube-container">
                <table className="tube-table">
                    <thead>
                        <tr>
                            <th scope="col">Line name</th>
                            <th scope="col">Line status</th>
                        </tr>
                    </thead>
                    <tbody className="tube-body">
                        {lines.map((line, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="tube-lines">{line.name}</td>
                                        <td className="tube-status" style={{color: line.color}}>{line.status}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}