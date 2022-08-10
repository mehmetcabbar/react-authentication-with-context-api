import React from 'react';
import './App.css';
import Provider from './context/provider/provider';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

export default App;
