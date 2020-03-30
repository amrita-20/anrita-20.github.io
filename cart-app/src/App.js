import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import CartPage from './components/CartPage';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App" className="row" style={{maxWidth : '100%'}}>
      <Header></Header>
      <div className="col-lg-2" style={{ borderRight : '1px solid lightgray'}}>
        <Filter></Filter>
      </div>
      <div className="col-lg-9">
        <CartPage></CartPage>
      </div>

    </div>
  );
}

export default App;
