/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from 'react';
import { Flight } from './data';

export type TotalDestinationsProps = {
  flights: Flight[];
};

export const TotalDestinations = (props: TotalDestinationsProps) => {
  //const [counter, setCounter] = useState(0);
  
  const calculateTotal = useCallback(((flights: Flight[]) => {
    let sum = 0;

    for (const flight of flights) {
      sum += flight.destinations.length;
    }

   //setCounter(sum);

    return sum;

  }), []);

  return (
    <div className="totals">
      <span>Total number of airlines: {props.flights.length}</span>
      <span>Total number of destinations: {calculateTotal(props.flights)}</span>
    </div>
  );
}

/*
 for (let i in allFlights) {
      if (typeof allFlights[i].destinations === 'object') {
        counter += allFlights[i].destinations.length;
      }
    }
  
    return counter;

*/