/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { tubeLines } from './data';

const getLineStatusClassName = () => {
    switch(tubeLines) {
        case tubeLines = ;
        return 'tube-lines--Good';
        break;

        case tubeLines == ;
        return 'tube-lines--PartSuspended';
        break;

        case tubeLines == ;
        return 'tube-lines--Closed';
        break;
    }
}

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
                                        <td className={getLineStatusClassName(line.status)}>{line.status}</td>
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