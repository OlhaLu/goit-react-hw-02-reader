import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import Counter from '../Counter/Counter.js';
import Publication from '../Publication/Publication.js';


class Reader extends Component {
    render() {
        return (
            <div сlassName="reader">
              <Controls />
              <Counter />
              <Publication />
          </div>
        )}
}
  

export default Reader;