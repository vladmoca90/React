/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { allFlights } from './data';

export type TotalDestinationsProps = {
  counter: number;
  flights: typeof allFlights;
};

export const TotalDestinations = (props: TotalDestinationsProps) => {
  let counter = 0;

  const total = useCallback((() => {
    for (let i in allFlights) {
      if (typeof allFlights[i].destinations === 'object') {
        counter += allFlights[i].destinations.length;
      }
    }
  
    return counter;
  
  }), [props]);

  return (
    <div className="totals">
      <span>Total number of airlines: {props.flights.length}</span>
      <span>Total number of destinations: {total()}</span>
    </div>
  );
}