import React from 'react';
import PropertyListingPage from 'PropertyListingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
