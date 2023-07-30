import React, {useState, useEffect, useCallback} from 'react';
import flights from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './airlines-destinations.css';

//Populates the entire table with all the data from flights = []
const allFlights = flights.map((flight) => {
  return (
    <tr key={flight.id}>
      <td className="airline-number">{flights.indexOf(flight) + 1}</td>
      <td className="airline-name">{flight.airline}</td>
      <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ', ')}</td>
    </tr>
  );
});

//Calculates the total number of destinations
const totalNumberOfDestinations = () => {
  if (flights.length == 0) {
    throw new Error('The list of flights must be provided!');
  }

  let counter = 0;

  for (let i in flights) {
    if (typeof flights[i].destinations === 'string') {
      counter += 1;
    }
    if (typeof flights[i].destinations === 'object') {
      counter += flights[i].destinations.length;
    }
  }

  return counter;
}

//Main function, that shows the table structure
export default function Destinations() {
  return (
    <main className="main">
      <div className="container-table">
        <table className="table table-hover">
          <thead className="table-header">
            <th>#</th>
            <th>Name</th>
            <th>Destinations</th>
          </thead>
          <tbody className="table-content">
            {allFlights}
          </tbody>
        </table>
        <div className="totals">
          <span>Total number of airlines: {allFlights.length}</span>
          <span>Total number of destinations: {totalNumberOfDestinations()}</span>
        </div>
      </div>
    </main>
  );
}