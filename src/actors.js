import React from 'react';
import './actors.css';
import actors from './projects/actors/data';

const allActors = actors.map((actor) =>
            <div className="article" key={ actor.name }>
                <div className="article__content">
                    <h2 className="article__heading">{ actor.name }</h2>
                    <p className="article__heading-sub">{ actor.dateOfBirth }</p>
                    <p className="article__heading-sub">{ actor.placeOfBirth }</p>
                    <p className="article__text">{ actor.biography }</p>
                </div>
                <div className="article__image">
                    <img alt={actor.name} src={actor.image} />
                </div>
            </div>);

class Actors extends React.Component {
    constructor() {
        super();
        this.state = {
          placeholder:'Search...'
        };
    }
  render() {
    return (
      <section className="main">
        <input type="text" placeholder={this.state.placeholder} className="filter-search" />
        <div className="container">
         {allActors}
        </div>
      </section>
    );
  }
}

export default Actors;
