/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { allFlights } from './data';

//Main function, that shows the table structure
export type TotalDestinationsProps = {
  counter: number;
}

export const TotalDestinations = (props: TotalDestinationsProps) => {
  const [selectOption] = useState<String>();

  const airlinesNumb = allFlights.length;

  const totalCalculus = useCallback((() => {

  }), [props]);

  return (
    <div className="totals">
      <span>Total number of airlines: {airlinesNumb}</span>
      <span>Total number of destinations: </span>
    </div>
  );
}

/* 
 if (allFlights.length == 0) {
    throw new Error('The list of allFlights must be provided!');
  }

  let counter = 0;

  for (let i in allFlights) {
    if (typeof allFlights[i].destinations === 'string') {
      counter += 1;
    }
    if (typeof allFlights[i].destinations === 'object') {
      counter += allFlights[i].destinations.length;
    }
  }

  return counter;
*/