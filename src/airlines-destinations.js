import React from 'react';
import './airlines-destinations.css';
import destinations from './data';

class Destinations extends React.Component {
  render() {
    return (
       <section className="main">
        <div className="container">
          {destinations}
        </div>
      </section>
    );
  }
}

export default Destinations;