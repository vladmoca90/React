import React from 'react';
import { allFlights } from './data';

//Populates the entire table with all the data from flights = []
export const totalFlights = allFlights.map((flight, index) => (
  <tr key={index}>
    <td className="airline-number">{flight.index + 1}</td>
    <td className="airline-name">{flight.airline}</td>
    <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ', ')}</td>
  </tr>
));
