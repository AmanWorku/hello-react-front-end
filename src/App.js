import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Greeting} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
