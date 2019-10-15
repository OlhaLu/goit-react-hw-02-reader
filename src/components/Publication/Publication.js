import React, { Component } from 'react';

export default class Publications extends Component {
  state = {
    questionIdx: 0,
  };

  render() {

    return (
        <article className="publication">
        <h2>{title}</h2>
        <p>{this.props.questions[this.state.questionIdx]}</p>
        </article>
    );
  }
}


Reader.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  };
  