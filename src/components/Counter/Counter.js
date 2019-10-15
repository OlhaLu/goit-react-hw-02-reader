import React, { Component } from 'react';
import T from 'prop-types';

export default class Counter extends Component {
    static propTypes = {
        step: T.number,
        initialValue: T.number,
      };
    
      static defaultProps = {
        step: 1,
        initialValue: 0,
      };


     render() {

    const { stepValue } = this.state;

    return (
      <div>
        <p className="counter">{stepValue}</p>
      </div>
    );
}
}