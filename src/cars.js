import React from 'react';
import './cars.css';
import styles from './styles';
import cars from './data';

const allCars =  cars.map((car) =>
        <div className="card" style={styles}>
          <div className="card__header">
            <div className="card__name">{car.name} {car.year}</div>
            <div className="card__price">&pound;{car.price}</div>
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


class Showroom extends React.Component {
  render() {
    return allCars;
  }
}

export default Showroom;
