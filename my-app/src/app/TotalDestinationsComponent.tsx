/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { allFlights } from './data';

export type TotalDestinationsProps = {
  counter: number;
  flights: typeof allFlights;
};

export const TotalDestinations = (props: TotalDestinationsProps) => {
  const [counter, setCounter] = useState<Number>(0);

  const total = useCallback((() => {
    for (const flight of props.flights) {
      return props.flights;
    }  
  
    return counter;
  }), [props]);

  return (
    <div className="totals">
      <span>Total number of airlines: {allFlights.length}</span>
      <span>Total number of destinations: {total}</span>
    </div>
  );
}

/* 
 if (allFlights.length == 0) {
    throw new Error('The list of allFlights must be provided!');
  }

  let counter = 0;

  for (const flight of flights) {
    counter += flights.length;
  }  

  return counter;
*/