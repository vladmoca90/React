/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { allFlights } from './data';

export type TotalDestinationsProps = {
  counter: number;
  flights: typeof allFlights;
};

export const TotalDestinations = (props: TotalDestinationsProps) => {
 // const [setCounter, total] = useState<Number>();
  const totalAirlines = allFlights.length;

  const totalCalculus = useCallback((() => {
    
  }), [props]);

  return (
    <div className="totals">
      <span>Total number of airlines: {totalAirlines}</span>
      <span>Total number of destinations: {totalCalculus()}</span>
    </div>
  );
}

/* 
 if (allFlights.length == 0) {
    throw new Error('The list of allFlights must be provided!');
  }

  let counter = 0;

  for (const flight in allFlights) {
    counter += allFlights[i].destinations.length;
  }  

  return counter;
*/