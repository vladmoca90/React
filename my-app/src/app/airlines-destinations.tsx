import React from 'react';
import './airlines-destinations.css';
import flights from './data';

const allFlights:any[] = flights.map((flight) => {
    <tr>
      <td>{flight.airline}</td>
      <td>{flight.destinations}</td>
    </tr>
});

const Destinations = () => {
  return (
    <section className="main">
      <div className="container">
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
    </section>
  );
}

export default Destinations;