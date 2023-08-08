/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import { TotalDestinations } from './TotalDestinations';
import { allFlights } from './data';

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
            {allFlights.map((Flight, index) => {
              return (
                <tr key={index}>
                  <td className="airline-number">{Flight.index + 1}</td>
                  <td className="airline-name">{Flight.airline}</td>
                  <td className="airline-destinations-list">{Flight.destinations.toString().replace(/,/g, ', ')}</td>
                </tr>
              );
            })}
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
