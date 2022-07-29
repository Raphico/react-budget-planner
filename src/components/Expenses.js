import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Expense from './Expense';

export default function Expenses()
{
  const { expenses } = useContext(GlobalContext);

  return (
    <div className="mt-5 divide-y divided-solid mx-5">
      <h1 className="sm:text-3xl text-2xl mb-2">Expenses</h1>
      <div className="flex flex-col gap-2">
        {expenses.length > 0 ? expenses.map(expense => <Expense key={expense.id} expense={expense} />) : <h1 className="text-2xl mt-2">No Expenses to Display</h1>}
      </div>
    </div>
  )
}