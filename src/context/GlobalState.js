import AppReducer from './AppReducer';
import { createContext, useReducer } from 'react';

const initialState = {
  expenses: [],
  budget: "$0"
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => 
{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteExpenseFromContext = (id) =>
  {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id
    })
  }
  const addExpenseToContext = (expense) =>
  {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense
    })
  }
  const changeBudgetFromContext = (amount) =>
  {
    dispatch({
      type: "CHANGE_BUDGET",
      payload: amount
    })
  }

  return(<GlobalContext.Provider value={{
    expenses: state.expenses,
    budget: state.budget,
    changeBudgetFromContext,
    addExpenseToContext,
    deleteExpenseFromContext
  }}>
    { children }
  </GlobalContext.Provider>)
}