/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { tubeStatus, statusColors, tubeLines } from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './tubeStatus.css';

export default function TubeComponent() {
    const [colorStatus, setColor] = useState(statusColors);

    return (
        <section></section>
    );
}