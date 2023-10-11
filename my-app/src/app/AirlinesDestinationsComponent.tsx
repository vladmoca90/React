"use client";
import { useEffect, useState } from 'react';
import { allFlights } from './APIs/airlines-destinations/route';
import { TotalDestinations } from './TotalDestinationsComponent';

export default function AirlinesDestinationsComponent() {
  const [flights] = useState(allFlights);
  
  let AirlinesDestUrl = 'http://localhost:3000/api/airlines-destinations';

  useEffect(() => {
    fetch(AirlinesDestUrl)
      .then(data => {
        console.log(data);
      })
      .then((result) => {

      },
      (error) => {
        console.log(error);
      });
  }, [AirlinesDestUrl])

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