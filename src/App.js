import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import LinkPage from "./LinkPage";
import OriginalLink from "./OriginalLink";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/l/:code" element={<LinkPage />} />
          <Route path="/original/:code" element={<OriginalLink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;