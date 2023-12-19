"use client";
import { useEffect, useState } from "react";
import { TotalDestinations } from "./TotalDestinationsComponent";
import { allFlights } from "./../../data/destinations.json";

export default function AirlinesDestinationsComponent() {
    const [flights, setFlights] = useState<typeof allFlights>([]);

    let flightsUrl = "http://localhost:8000/allFlights";

    useEffect(() => {
        fetch(flightsUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFlights(data);
            });
    }, [flightsUrl]);

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
                                        <td className="airline-destinations-list">{flight.destinations.toString().replace(/,/g, ", ")}</td>
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