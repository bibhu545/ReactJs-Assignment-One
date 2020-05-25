import React from 'react';
import './App.css';
import Home from './Components/Home';
import { CommonProvider } from "./Utils/CommonContext";

function App() {
  return (
    <CommonProvider>
      <Home />
    </CommonProvider>
  );
}

export default App;
