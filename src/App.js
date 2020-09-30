import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
          avatar="https://randomuser.me/api/portraits/women/32.jpg"
          name="Eleanor Silva"
          online
      />
      <Contact
          avatar="https://randomuser.me/api/portraits/women/52.jpg"
          name="Linda Taylor"
          online
      />
      <Contact
          avatar="https://randomuser.me/api/portraits/men/89.jpg"
          name="Rene Barnes"
      />
    </div>
  );
}

export default App;
