import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddNewTransaction from './Components/AddNewTransaction';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddNewTransaction/>
        </div>
    </div>
  );
}

export default App;
