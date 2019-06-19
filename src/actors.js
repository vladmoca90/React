import React from 'react';
import './filter.css';
import actors from './data';

var actorsList = <div class="filter-box">
        <input class="filter-field" type="text" />
        { actors }
      </div>;

class Actors extends React.Component {
  render() {
    return actorsList;
}

export default Actors;
