/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { tubeStatus, statusColors, tubeLines } from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './tubeStatus.css';

export default function TubeComponent() {
    const [colorStatus, setColor] = useState(statusColors);

    return (
        <section id="main" className="d-flex">
            <div className="tube-container">
                <table className="tube-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="tube-body">
                        <tr>
                            <td className="tube-lines"></td>
                            <td className="tube-status"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}