import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";

export default function Header()
{
  const { budget, changeBudgetFromContext } = useContext(GlobalContext);
  const [budgetAmount, setBudgetAmount] = useState(budget);
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(true)

  const changeBudget = () =>
  { 
    if (!edit)
    {
      setEdit(!edit);
      setDisabled(!disabled);
    }
    else
    {
      if (typeof(Number.parseInt(budgetAmount.replace('$', ''))))
      {
        changeBudgetFromContext(budgetAmount);
      }
      else
      {
        alert('Pls, Enter a valid budget')
      }
      setEdit(!edit);
      setDisabled(!disabled);
    }
  }
  
  return (
    <div className="grid sm:grid-cols-1 gap-5 md:grid-cols-2">
      <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">Budget Planner</h1>
      <div className="grid grid-cols-2 gap-5">
        <input className="text-2xl sm:text-3xl bg-white text-right px-5" disabled={disabled} type="text" value={budgetAmount === '' ? '$0' : budgetAmount} onChange={(e) => setBudgetAmount(e.target.value)} />
        <button onClick={changeBudget} className={`bg-[${edit ? '#FF6A74' : '#9DDFFF'}] py-3 px-5 rounded hover:opacity-90 active:scale-90 transition-all max-w-[100px]`}>{edit ? 'Done' : 'Edit'}</button>
      </div>
    </div>
  )
}