import React from 'react'
import {IncomeExpenses} from './Components/IncomeExpenses'
import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';



function App() {
  return (
    <div >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        
      </div>
    </div>
  );
}

export default App;
