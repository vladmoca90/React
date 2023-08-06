import React from 'react';
import { allFlights } from './allFlights';
import { totalNumberOfDestinations } from './totalNumberOfDestinations';

//Main function, that shows the table structure

export default function Destinations() {
  return (
    <main className="main">
      <div className="container-table">
        <table className="table-main table">
          <thead className="table-header">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Destinations</th>
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
