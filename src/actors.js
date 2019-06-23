import React from 'react';
import './actors.css';
import actors from './data';

var allActors = actors.map((actor) =>
            <article className="article">
                <div className="article__content">
                    <h2 role="heading" className="article__heading">{ actor.name }</h2>
                    <p role="heading" className="article__heading-sub">{ actor.dateOfBirth }</p>
                    <p role="heading" className="article__heading-sub">{ actor.placeOfBirth }</p>
                    <p role="text" className="article__text">{ actor.biography }</p>
                </div>
                <div className="article__image">
                    <img alt={actor.name} src={actor.image} />
                </div>
            </article>);

class Actors extends React.Component {
  render() {
    return (
      <section className="box">
        <input type="text" className="box__filter" />
        {allActors}
      </section>
    );
}

// export default Actors;
