import React from 'react';
import './cars.css';
import cars from './data';

const total = <span className="total-number">{cars.length}</span>;
const allCars =  cars.map((car) =>
  <div className="card">
    <div className="card__header">
      <div className="card__name" key={car.name}>{car.name} {car.year}</div>
      <div className="card__price" key={car.price}>&pound;{car.price}</div>
    </div>
    <div className="card__body">
      <img className="card__image" ky={car.name} alt={car.name} src={car.image} />
    </div>
    <div className="card__buttons">
      <a className="card__link" href="##">Enquiry</a>
      <a className="card__link" href="##">Brochure</a>
      <a className="card__link" href="##">More details</a>
    </div>
  </div>
);

class Showroom extends React.Component {
  constructor() {
    super();
    this.state = {
      placeholder:'Search...'
    };
  }
  render() {
    return (
      <div className="main">
        <input type="text" placeholder={this.state.placeholder} className="filter-search" />
        <div className="showroom-container">{allCars}</div>
        <div className="total-cars">There are {total} cars available</div>
      </div>
    );
  }
}

export default Showroom;