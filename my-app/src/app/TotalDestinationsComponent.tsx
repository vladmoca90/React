"use client";
import { useCallback } from 'react';
import { Flight } from './APIs/airlines-destinations/data';

export type TotalDestinationsProps = {
  flights: Flight[];
}

export const TotalDestinations = (props: TotalDestinationsProps) => {
  const calculateTotal = useCallback(((flights: Flight[]) => {
    let sum = 0;

    for (const flight of flights) {
      sum += flight.destinations.length;
    }

    return sum;
  }), []);

  return (
    <div className="totals">
      <span>Total number of airlines: {props.flights.length}</span>
      <span>Total number of destinations: {calculateTotal(props.flights)}</span>
    </div>
  );
}