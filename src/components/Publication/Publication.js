import React from 'react';
import T from 'prop-types';

const Publications = ({ items }) => {
    return (
      <article id={items.id}>
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      </article>
    );
}

  Publications.propTypes = {
  items: T.shape({
    id: T.string,
    title: T.string,
    text: T.string,
  })
};
  
export default Publications;