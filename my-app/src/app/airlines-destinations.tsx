import React from 'react';
import './airlines-destinations.css';
import flights from './data';

const allFlights = flights.map((flight) => {
    return (
      <tr key={flight.id}>
        <td>{flight.id}</td>
        <td>{flight.airline}</td>
        <td>{flight.destinations}</td>
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
        <div className="total-destinations">
          <span>Number of airlines: {allFlights.length}</span>
        </div>
      </div>
    </main>
  );
}