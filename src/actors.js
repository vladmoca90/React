import React from 'react';
import './filter.css';
import actors from './data';

var actorsList = <div className="filter-box">
        <input className="filter-field" type="text" />
        { actors }
      </div>;

class Actors extends React.Component {
  render() {
    return actorsList;
}

export default Actors;
