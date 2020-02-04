import React from 'react';
import './App.css';

import Header from "./Components/Header";
import InitialForm from './Components/InitialForm';
import Sidebar from './Components/Sidebar';
import Repositorys from './Components/Repositorys';


function App() {
  return (
    <div className="App">
      <Header />
      <InitialForm />
      <Sidebar />
      <Repositorys />
    </div>  
  );
}

export default App;
