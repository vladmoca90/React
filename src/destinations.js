import React from 'react';
import './destinations.css';
import destinations from './data';

// const allDestinations =

class Destinations extends React.Component {
   constructor() {
        super();
        this.state = {
          placeholder:'Search...',
          search: '',
        };
    }

  render() {
    let filterDestinations = destinations.filter(
      (destination) => {
        return destination.title.indexOf(this.state.search) !== -1 ||
              destination.subTitle.indexOf(this.state.search) !== -1 ||
              destination.content.indexOf(this.state.search) !== -1;
      }
    );
    return (
       <section className="main">
        <input type="text" value={this.state.search} placeholder={this.state.placeholder} className="filter-search" />
        <div className="cards container">
          <div className="row">
            { destinations.map((destination) =>
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
                      </div>)
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;