import React from 'react';
import './destination.css';
import destinations from './data';

var allDestinations = destinations.map((destination) =>
             <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card__img-container">
                            <img src="../../../images/cards/destinations/Malaysia.jpg" alt="Malaysia travel" className="card__img" />
                        </div>
                        <div className="card__content">
                            <p className="card__heading"></p>
                            <p className="card__subHeading"></p>
                            <p className="card__text"></p>
                            <div className="card__link-container u--absolute">
                                <a href="##" className="card__link u-relative">g</a>
                            </div>
                        </div>
                    </div>
                </div>);

class Destinations extends React.Component {
  render() {
    return (
       <section role="main" className="main">
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