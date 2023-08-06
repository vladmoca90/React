import React from 'react';
import flights from './data';

//Populates the entire table with all the data from flights = []
export const allFlights = flights.map((flight, index) => {
  return (
    <tr key={flight.index}>
      <td className="airline-number">{flights.indexOf(flight) + 1}</td>
      <td className="airline-name">{flight.airline}</td>
      <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ', ')}</td>
    </tr>
  );
});
