import React from 'react';
import './airlines-destinations.css';
import flights from './projects/destinations/data';

const allFlights = flights.map((flight) => 
                    <tr>
                      <th scope="row">{flights.indexOf(flight) + 1}</th>
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
            <thead className="thead-dark table-header">
              <th>#</th>
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