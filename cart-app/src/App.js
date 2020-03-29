import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import CartPage from './components/CartPage';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App" class="row" style={{maxWidth : '100%', margin: 0}}>
      <Header></Header>
      <div class="col-lg-2" style={{ borderRight : '1px solid lightgray'}}>
        <Filter></Filter>
      </div>
      <div class="col-lg-9">
        <CartPage></CartPage>
      </div>

    </div>
  );
}

export default App;
