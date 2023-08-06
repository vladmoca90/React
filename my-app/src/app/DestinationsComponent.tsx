import React from 'react';
import { TotalDestinations } from './TotalDestinations';
import { allFlights } from './data';
import { totalFlights } from './allFlights';

//Main function, that shows the table structure

export default function DestinationsComponent() {
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
            {totalFlights}
          </tbody>
        </table>
        <div className="totals">
          <span>Total number of airlines: {allFlights.length}</span>
          <span>Total number of destinations: <TotalDestinations /></span>
        </div>
      </div>
    </main>
  );
}
