import React from 'react';
import { SimpleNav } from './components/SimpleNav'


function App() {
  return (
    <SimpleNav 
    logo={{ text: "Logo" , img: {src: "//placehold.it/100x50"}}} 
    links={[
            { href: "#", content: "Home" }, 
            { href: "#", content: "About" }, 
            { href: "#", content: "Blog" }, 
            { href: "#", content: "Contact" }
          ]}/>
  );
}

export default App;
