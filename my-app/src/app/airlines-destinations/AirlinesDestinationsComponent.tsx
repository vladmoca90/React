"use client";
import { useEffect, useState } from "react";
import { TotalDestinations } from "./TotalDestinationsComponent";
import { Flight } from "../api/airlines-destinations/flight";

export default function AirlinesDestinationsComponent() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [error, setError] = useState<String>();

    let flightsUrl = "http://localhost:8000/api/airlines-destinations";

    useEffect(() => {
        fetch(flightsUrl)
            .then((response) => response)
            .then(e => e.json())
            .then(e => setFlights(e as Flight[]))
            .catch(error =>
                setError(error))
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