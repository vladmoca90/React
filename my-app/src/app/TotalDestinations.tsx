/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { allFlights } from './data';

//Main function, that shows the table structure
export type TotalDestinationsProps = {
  counter: number;
}

export const TotalDestinations = (props: TotalDestinationsProps) => {
  const [] = useState<String>();

  const TotalDestinations = useCallback((() => {

  }), [props]);
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