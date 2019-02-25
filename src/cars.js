import React, { Component } from 'react';
import './cars.css';
import cars from './data';

const allCars = cars.map((car) =>
        <div className="card">
          <div className="card__header">
            {car.name} {car.year}
            <div>£{car.price}</div>
          </div>
          <div className="card__body">
            <img alt={car.name} src={car.image} />
          </div>
          <div className="card__buttons">
            <a href="https://reactjs.org/">Enquiry</a>
            <a href="https://reactjs.org/">Brochure</a>
            <a href="https://reactjs.org/">More details</a>
          </div>
        </div>
      );

class Showroom extends Component {
  render() {
    return allCars;
  }
}

export default Showroom;
