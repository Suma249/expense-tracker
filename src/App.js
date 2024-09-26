import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddNewTransaction from './Components/AddNewTransaction';
import {GlobalProvider} from './Context/global'

function App() {
  return (
    <div className="App">
    <GlobalProvider>
     <Header/>
     <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddNewTransaction/>
        </div>
     </GlobalProvider>
    </div>
  );
}

export default App;
