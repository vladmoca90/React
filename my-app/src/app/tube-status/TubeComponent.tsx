"use client";
import React, { ChangeEvent, useCallback, useState } from 'react';
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
            return 'Part Suspended';

        case LineStatus.Closed:
            return 'Closed';

        default:
            return 'Unknown';
    }
}

const getLineStatusFromFriendlyName = (friendlyName: string): LineStatus => {
    switch (friendlyName) {
        case 'Good service':
            return LineStatus.Good;

        case 'Part Suspended':
            return LineStatus.PartSuspended;

        case 'Closed':
            return LineStatus.Closed;

        default:
            throw new Error('Unrecognized friendly name: ' + friendlyName);
    }
}

export default function TubeComponent() {
    const [lines] = useState(tubeLines);
    const [selectedLine, setSelectedLine] = useState(lines[0]);

    const selectLine = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const lineName = event.target.value;
        const line = lines.find((line) => line.name === lineName)!; // ! - exclamation mark makes a variable NOT BE UNDEFINED

        setSelectedLine(line);

        console.log(lineName, line);
    }, [lines]);

    const selectStatus = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const statusName = event.target.value;
        const lineStatus = getLineStatusFromFriendlyName(statusName);

        console.log(statusName, lineStatus);
    }, []);

    return (
        <div id="main">
            <div className="d-flex justify-content-between tube-options">
                <select id="chooseLineName" title="tubeLines" onChange={selectLine} defaultValue={selectedLine.name}>
                    {
                        lines.map((line, index) => {
                            return (
                                <option value={line.name} key={index}>{line.name}</option>
                            );
                        })
                    }
                </select>
                <select id="chooseLineStatus" title="tubeStatus" onChange={selectStatus} value={getLineStatusFriendlyName(selectedLine.status)}>
                    <option value={getLineStatusFriendlyName(LineStatus.Good)}>{getLineStatusFriendlyName(LineStatus.Good)}</option>
                    <option value={getLineStatusFriendlyName(LineStatus.PartSuspended)}>{getLineStatusFriendlyName(LineStatus.PartSuspended)}</option>
                    <option value={getLineStatusFriendlyName(LineStatus.Closed)}>{getLineStatusFriendlyName(LineStatus.Closed)}</option>
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