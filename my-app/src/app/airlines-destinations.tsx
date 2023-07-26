import React from 'react';
import './airlines-destinations.css';
import allFlights from './data';

const airport = allFlights.map((allFlight) =>
  <tr>
    <th scope="row">{allFlight.indexOf(allFlight) + 1}</th>
    <td>{allFlight.airline}</td>
    <td>{allFlight.destinations}</td>
  </tr>
);

export default Destinations;