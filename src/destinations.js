import React from 'react';
import './destination.css';
import destinations from './data';

var allDestinations = destinations.map((destination) =>
            <article className="article">
                
            </article>);

class Destinations extends React.Component {
  render() {
    return (
      <section className="box">
        <input type="text" className="box__filter" />
        {allDestinations}
      </section>
    );
  }
}

export default Destinations;