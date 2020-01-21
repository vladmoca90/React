import React from 'react';
import './airlines-destinations.css';
import flights from './data';

const allFlights = flights.map((flight) => 
  <table className="table">
    <thead class="table-header">
      <th>Name</th>
      <th>Destinations</th>
    </thead>
    <tbody className="table-content">
      <tr>
        <td>{flight.airline}</td>
        <td>{flight.destinations}</td>
      </tr>
    </tbody>
  </table>
);

class Destinations extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="container">
          {allFlights}
          <div className="total">
            {flights.length}
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;