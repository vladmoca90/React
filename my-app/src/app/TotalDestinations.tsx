/* eslint-disable @next/next/no-img-element */
"use client";
import { allFlights } from './data';

//Calculates the total number of destinations
export const TotalDestinations = () => {
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
};