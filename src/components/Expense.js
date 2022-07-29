import { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'

export default function Expense({ expense })
{
  const  { deleteExpenseFromContext } = useContext(GlobalContext);

  const deleteExpense = (id) => 
  {
    deleteExpenseFromContext(id);
  }

  return (
    <div className='flex items-center justify-between border border-l-4 border-l-[#FF6A74] my-2 py-3 px-2'>
      <p>{expense.text}</p>
      <p>{expense.amount}</p>
      <FaTimes color="#9DDFFF" onClick={() => deleteExpense(expense.id)} />
    </div>
  )
}