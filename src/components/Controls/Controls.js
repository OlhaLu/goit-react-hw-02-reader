import React, { Component } from 'react';
import T from 'prop-types';

export default class Controls extends Component {

  static propTypes = {
    prevList: T.function,
    nextList: T.function,
  };

  static defaultProps = {
    step: 1,
    value: 0,
  };

  state = {
    value: this.props.value,
    step: this.props.step,
  };

  render() {  
    prevList = () => {
      this.setState(prevState => ({
        value: prevState.value - prevState.step,
      }));
    };

    nextList = () => {
      this.setState(prevState => ({
        value: prevState.value + prevState.step,
      }));
    };

  return (
    
    <section className="controls">
          <button type="button" className="button" 
          onClick={this.prevList}>Назад</button>

          <button type="button" className="button" 
          onClick={this.nextList}>Вперед</button>
        </section>
    )}
}
