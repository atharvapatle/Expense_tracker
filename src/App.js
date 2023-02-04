import React from 'react'
import {IncomeExpenses} from './Components/IncomeExpenses'
import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        
      </div>
    </GlobalProvider>
  );
}

export default App;
