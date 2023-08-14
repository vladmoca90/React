/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import { allFlights } from './data';
import { TotalDestinations } from './TotalDestinationsComponent';

export default function AirlinesDestinationsComponent() {
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
            {
              allFlights.map((flight, index) => {
                return (
                  <tr key={index}>
                    <td className="airline-number">{index + 1}</td>
                    <td className="airline-name">{flight.airline}</td>
                    <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ', ')}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <TotalDestinations counter={0} flights={allFlights} />
      </div>
    </main>
  );
}