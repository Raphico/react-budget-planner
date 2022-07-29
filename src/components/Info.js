import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"

export default function Info()
{
  const { budget, expenses } = useContext(GlobalContext);
  
  const budgetAmount = Number.parseInt(budget.replace('$', '')).toFixed(2);

  const expensesAmount = expenses.map(budget => Number.parseInt(budget.amount.replace('$', '')));
  let totalExpenses = 0;
  if (expensesAmount.length !== 0)
  {
    totalExpenses = expensesAmount.reduce((total, num) => total += num).toFixed(2);
  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-10 text-center mx-5">
      <div className="bg-[#FF6A74] rounded border-black py-3 px-3">
        <p className="sm:text-xl text-[18px]">Total Expenses: ${totalExpenses}</p>
      </div>
      <div className="bg-[#9DDFFF] rounded border-black py-3 px-3">
        <p className="sm:text-xl text-[18px]">Amount Remaining: ${budgetAmount - totalExpenses}</p>
      </div>
    </div>
  )
}