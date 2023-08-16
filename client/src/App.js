import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/template/Footer';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
