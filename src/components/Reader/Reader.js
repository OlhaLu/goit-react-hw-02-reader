import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import style from '../../styles.css';

export default class Reader extends Component {
  state = {
    items: 0,
    renderedPage: 1,
  };

  handlePrevList = () => {
    this.setState(prevState =>
      prevState.renderedPage > 1
        ? { renderedPage: prevState.renderedPage - 1 }
        : { renderedPage: prevState.renderedPage },
    );
  }
  
  handleNextList = () => {
    const { items } = this.props;
    this.setState(prevState => 
      prevState.renderedPage < items.length
        ? { renderedPage: prevState.renderedPage + 1 }
        : { renderedPage: prevState.renderedPage },
    );
  }
        render() {
          const { renderedPage } = this.state;
          const { items } = this.props;
          
        return (
          <div сlassName={style.render}>
        <Controls
          prevList={this.handlePrevList}
          nextList={this.handleNextList}
        />
        <Counter 
        currentValue={renderedPage} 
        totalValue={items.length} 
        />
        <Publication 
        items ={items[renderedPage - 1]}
        />
        </div>
    )}  
}