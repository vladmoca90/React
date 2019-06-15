import React from 'react';
import './filter.css';
import Filter from './data';

var filter = <div class="filter-box">
        <input class="filter-field" type="text" />
      </div>;

class Filter extends React.Component {
  render() {
    return filter;
}

export default Filter;
