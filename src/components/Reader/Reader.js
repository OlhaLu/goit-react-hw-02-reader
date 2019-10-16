import React, { Component } from 'react';
// import T from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  // static propTypes = {
  //   step: T.number,
  //   value: T.number,
  //   items: T.array,
  // };
  
  // static defaultProps = {
  //   step: 1,
  //   value: 0,
  //   items: [],
  // };
  
  // state = {
  //   value: this.props.value,
  //   step: this.props.step,
  //   items: this.props.items,
  // };

  state = {
    step: 1,
    items: 0,
  };

  prevList = () => {
    this.setState(prevState => ({
      items: prevState.items - prevState.step,
    }));
  }
  
  nextList = () => {
    this.setState(prevState => ({
      items: prevState.value + prevState.step,
    }));
  }
        render() {
          const { items } = this.state;
        return (
          <div сlassName="reader">
        <Controls
          prevList={this.handlePrevList}
          nextList={this.handleNextList}
        />
        <Counter currentValue={items} totalValue={items.length} />
        <Publication article={items} />
          </div>
        )}  
}