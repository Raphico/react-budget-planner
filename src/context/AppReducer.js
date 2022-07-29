export default function AppReducer(state, action) {
  switch(action.type)
  {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }

    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      }

    case 'CHANGE_BUDGET':
      return {
        ...state,
        budget: state.budget = action.payload
      }

    default:
      return state
  }
}