import React from 'react';
import './cars.css';
import cars from './data';

const total = <span>{cars.length}</span>;
const allCars =  cars.map((car) =>
        <div className="card">
          <div className="card__header">
            <div className="card__name">{car.name} {car.year}</div>
            <div className="card__price">&pound;{car.price}</div>
          </div>
          <div className="card__body">
            <img alt={car.name} src={car.image} />
          </div>
          <div className="card__buttons">
            <a href="##">Enquiry</a>
            <a href="##">Brochure</a>
            <a href="##">More details</a>
          </div>
        </div>
      );

class Showroom extends React.Component {
  render() {
    return (
    <div className="main">
      <div className="total">{total}</div>
      <div className="showroom-container">{allCars}</div>
    </div>
    );
  }
}

export default Showroom;
