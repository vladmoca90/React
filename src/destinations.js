import React from 'react';
import './destination.css';
import destinations from './data';

var allDestinations = destinations.map((destination) =>
             <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="card u-bg--white u-border">
                        <div class="u-relative">
                            <img src="../../../images/cards/destinations/Malaysia.jpg" alt="Malaysia travel" class="card__img" />
                        </div>
                        <div class="card__content u-relative">
                            <p class="card__heading">Malaysia</p>
                            <p class="card__subHeading u-text--bold">Asia</p>
                            <p class="card__text">Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of
                                Borneo. Its known for its beaches, rainforests and mix of Malay, Chinese, Indian and European
                                cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping
                                districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin
                                Towers.
                            </p>
                            <div class="card__link-container u--absolute">
                                <a href="##" class="card__link u-relative">See our offers</a>
                            </div>
                        </div>
                    </div>
                </div>);

class Destinations extends React.Component {
  render() {
    return (
      <section className="box">
        <input type="text" className="box__filter" />
        {allDestinations}
      </section>
    );
  }
}

export default Destinations;