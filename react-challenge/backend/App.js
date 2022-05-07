import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes signup={signup} />
      </div>
    </BrowserRouter>
  )
}

export default App;