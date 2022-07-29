import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Info from './components/Info';
import Expenses from './components/Expenses'
import AddExpense from './components/AddExpense';
import { useState } from 'react';

function App() {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const toggleAddExpense = () => 
  {
    setShowAddExpense(!showAddExpense)
  }

  return (
    <GlobalProvider>
      <div className="container mx-auto box-border max-w-[800px] my-5">
        <Header />
        <Info />
        <div className="text-center mx-5 grid grid-cols-2 gap-5 my-5">
          <h1 className="sm:text-3xl text-2xl whitespace-nowrap">Add Expense</h1>
          <button onClick={toggleAddExpense} className={`bg-[${showAddExpense ? '#FF6A74' : '#9DDFFF'}] rounded hover:opacity-90 active:scale-90 transition-all max-w-[100px] py-3`}>{showAddExpense ? 'Remove' : 'Show'}</button>
        </div>
        {showAddExpense && <AddExpense />}
        <Expenses />
      </div>
    </GlobalProvider>
  );
}

export default App;
