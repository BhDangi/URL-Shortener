import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OriginalLink from './OriginalLink';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/original/:code" element={<OriginalLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;