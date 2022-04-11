import React from "react";

const DisplayQuote = ({image, character, quote } ) => {
  return (
      <div>
          <img src={image} alt={character} />
          <h1>{character}</h1>
          <h2>{quote}</h2>
      </div>
  )
};

export default DisplayQuote;