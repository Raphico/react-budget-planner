import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddExpense()
{
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addExpenseToContext } = useContext(GlobalContext);

  const addExpense = (e) =>
  {
    e.preventDefault();

    if (text && amount)
    {
      const id = Math.round(Math.random() * 10000);
      addExpenseToContext({id, text, amount})
    }
    else
    {
      alert("Pls Enter a valid Expense");
    }
    setText('');
    setAmount('');
  }

  return (
    <div className="text-center mx-5">
      <form className="grid grid-cols-1 gap-5">
        <input className="px-3 py-2 border block" type="text" placeholder="Expense" value={text} onChange={(e) => setText(e.target.value)} />
        <input className="px-3 py-2 border block" type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input className="px-3 py-2 bg-[#FF6A74] rounded block" onClick={addExpense} type="submit" value="Add Expense" />
      </form>
    </div>
  )
}