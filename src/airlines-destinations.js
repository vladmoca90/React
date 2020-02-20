import React from 'react';
import './airlines-destinations.css';
import flights from './data';
const allFlights = flights.map((flight) => 
  <tr>
    <td>{flight.airline}</td>
    <td>{flight.destinations}</td>
  </tr>
);

class Destinations extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="container">
          <table className="table">
            <thead className="table-header">
              <th>Name</th>
              <th>Destinations</th>
            </thead>
            <tbody className="table-content">
                {allFlights}
            </tbody>
          </table>
          <div class="total-destinations">Number of airlines: {flights.length}</div>
        </div>
      </section>
    );
  }
}

export default Destinations;