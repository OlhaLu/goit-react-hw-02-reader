import React from 'react';
import T from 'prop-types';

const Counter = ({currentValue, totalValue}) => {
    return (
      <div>
         <p className="counter">{currentValue}/{totalValue}</p>
      </div>
    );
  }

  Counter.propTypes = {
    currentValue: T.number.isRequired,
    totalValue: T.number.isRequired,
  };

export default Counter;