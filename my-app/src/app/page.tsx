import React from 'react';
import './airlines-destinations.css';
import flights from './data';

const allFlights = flights.map((flight, i) => {
    return (
      <tr key={flight.id}>
        <td className="airline-number">{flights.indexOf(flight) + 1}</td>
        <td className="airline-name">{flight.airline}</td>
        <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ', ')}</td>
      </tr> 
    );
});

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
          <span>Total number of destinations: { }</span>
        </div>
      </div>
    </main>
  );
}