import './App.css';
import axios from 'axios';
import React, { useState } from "react";
import DisplayQuote from './componente/DisplayQuote.jsx';


const sampleQuote = {
  quote: "I believe the children are the future... Unless we stop them now!",
character: "Homer Simpson",
image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
characterDirection: "Right"

};


function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => (response.data))
    .then((data) => {
      setQuote(data[0]);
    });
};
  return (
    <div className="App">
       <DisplayQuote {...quote} />
       <button type="button" onClick={getQuote}> New Quote</button>
    </div>
  );
}

export default App;
