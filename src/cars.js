import React, { Component } from 'react';
import cars from './data';

// const carName = cars.map(cars => <span>{cars.name}</span>);
// const carYear = cars.map(cars  => <span>{cars.year}</span>);
// const carPrice = cars.map(cars => <span>{cars.price}</span>);
// const carImg = cars.map(cars => <span>{cars.image}</span>);

class Showroom extends Component {
  render() {
    return (
      cars.map((car) =>
        <div class="card">
          <div class="card__header">
            {car.name} {car.year}
            <div>£{car.price}</div>
          </div>
          <div class="card__body">
            <img alt={car.name} src={car.image} />
          </div>
          <div class="card__buttons">
            <a href="https://reactjs.org/">Enquiry</a>
            <a href="https://reactjs.org/">Brochure</a>
            <a href="https://reactjs.org/">More details</a>
          </div>
        </div>
      )
    );
  }
}

export default Showroom;
