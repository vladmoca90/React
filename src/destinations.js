import React from 'react';
import './destinations.css';
import destinations from './data';

const allDestinations = destinations.map((destination) =>
                      <div className="card-container">
                        <div className="card" key={ destination.title }>
                          <div className="card__img-container">
                            <img src={ destination.img } alt={ destination.imgDescription } className="card__img" />
                          </div>
                          <div className="card__content">
                            <p className="card__heading">{ destination.title }</p>
                            <p className="card__subHeading">{ destination.subTitle }</p>
                            <p className="card__text">{ destination.content }</p>
                            <div className="card__link-container">
                                <a rel="noopener noreferrer" target="_blank" 
                                href={ destination.url } 
                                className="card__link">See our offers</a>
                            </div>
                          </div>
                        </div>
                      </div>);

// const searchItem = destinations.filter((destination) => {
//   if(this.state.search == null) {
//       return destinations;
//   }
//   else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || 
//           data.country.toLowerCase().includes(this.state.search.toLowerCase())) {
//       return destinations;
//   }

class Destinations extends React.Component {
   constructor() {
        super();
        this.state = {
          placeholder:'Search...',
          search: null,
        };
    }
  render() {
    return (
       <section className="main">
        <input type="text" placeholder={this.state.placeholder} className="filter-search" />
        <div className="cards container">
          <div className="row">
            {allDestinations}
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;