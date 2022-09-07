const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CURRENCIES_ACTION':
      return {
        ...state,
        currencies: [...action.currencies],
      };
    case 'EXPENSES_ACTION':
      return {
        ...state,
        expenses: Array.isArray(action.expenses) ? 
          action.expenses : [...state.expenses, action.expenses]
      };
    default:
      return state;
  }
}

export default walletReducer;