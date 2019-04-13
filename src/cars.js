import React from 'react';
import './cars.css';
import cars from './data';

const total = <span className="total-number">{cars.length}</span>;
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
            <a className="card__link" href="##">Enquiry</a>
            <a className="card__link" href="##">Brochure</a>
            <a className="card__link" href="##">More details</a>
          </div>
        </div>
      );

class Showroom extends React.Component {
  render() {
    return (
    <div className="main">
      <div className="showroom-container">{allCars}</div>
      <div className="total-cars">There are {total} cars available</div>
    </div>
    );
  }
}

export default Showroom;
