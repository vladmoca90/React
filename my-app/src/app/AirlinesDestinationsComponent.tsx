"use client";
import { useEffect, useState } from 'react';
import { allFlights } from './route';
import { TotalDestinations } from './TotalDestinationsComponent';

export type AirlinesRequestProps = {
  result: undefined;
  error: string;
}

export default function AirlinesDestinationsComponent() {
  const [flights] = useState(allFlights);

  let airlinesDestUrl = "http://localhost:3000/airlines-destinations";

  useEffect(() => {
    fetch(airlinesDestUrl)
      .then(data => {
        console.log(data);
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        });
  }, [airlinesDestUrl]);

  return (
    <main className="main">
      <div className="container-table">
        <table className="table-main table">
          <thead className="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Destinations</th>
            </tr>
          </thead>
          <tbody className="table-content">
            {
              flights.map((flight, index) => {
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
        <TotalDestinations flights={flights} />
      </div>
    </main>
  );
}