/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { LineStatus, tubeLines } from './data';

const getLineStatusClassName = (status: LineStatus) => {
    let lineStatusClass = '';

    switch (status) {
        case LineStatus.Good:
            lineStatusClass = 'tube-status--good';
            break;

        case LineStatus.PartSuspended:
            lineStatusClass = 'tube-status--part-suspended';
            break;

        case LineStatus.Closed:
            lineStatusClass = 'tube-status--closed';
            break;
    }

    return `tube-status ${lineStatusClass}`;
}

const getLineStatusFriendlyName = (status: LineStatus) => {
    switch (status) {
        case LineStatus.Good:
            return 'Good service';

        case LineStatus.PartSuspended:
            return 'Partially Suspended';

        case LineStatus.Closed:
            return 'Closed';
        default:
            return 'Unknown';
    }
}

export default function TubeComponent() {
    const [lines] = useState(tubeLines);
    const [selectedLine, setSelectedLine] = useState(lines[0]);

    return (
        <div id="main">
            <div className="d-flex justify-content-between tube-options">
                <select id="chooseLineName" title="tubeLine" onChange={selectedLine()}>
                    {
                        lines.map((line, index) => {
                            <option value="All lines">All lines</option>
                            return (
                                <option value={line.name} key={index}>{line.name}</option>
                            );
                        })
                    }
                </select>
                <select id="chooseLineStatus" title="tubeStatus">
                    <option value="Status">Status</option>
                    <option value={LineStatus.Good}>{LineStatus.Good}</option>
                    <option value={LineStatus.PartSuspended}>{LineStatus.PartSuspended}</option>
                    <option value={LineStatus.Closed}>{LineStatus.Closed}</option>
                </select>
            </div>
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
                                        <td className={getLineStatusClassName(line.status)}>{getLineStatusFriendlyName(line.status)}</td>
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