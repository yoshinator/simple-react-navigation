import React from 'react';
import { SimpleNav } from './SimpleNav'


function App() {
  return (
    <SimpleNav links={[
      { href: "#", content: "Home" },
      { href: "#", content: "About" },
      { href: "#", content: "Blog" },
      { href: "#", content: "Contact" }
    ]}

      logo={{
        text: "Logo"
      }}

    />
  );
}

export default App;
