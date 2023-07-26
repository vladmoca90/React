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

class Destinations extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="container">
          <table className="table table-hover">
            <thead className="table-header">
              <th>#</th>
              <th>Name</th>
              <th>Destinations</th>
            </thead>
            <tbody className="table-content">
                {airport}
            </tbody>
          </table>
          <div className="total-destinations">
            <span>Number of airlines: {allFlights.length}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;