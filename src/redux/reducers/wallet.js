// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SEND_COIN_LIST_CODE,
  SAVE_EXPENSE,
  DEL_EXPENSE,
  REQUEST_EDIT,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_COIN_LIST_CODE: {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  case SAVE_EXPENSE: {
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  }
  case DEL_EXPENSE: {
    const filteredExpenses = state.expenses
      .filter((expense) => expense.id !== action.payload);
    return {
      ...state,
      expenses: filteredExpenses,
    };
  }
  case REQUEST_EDIT: {
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  }
  case EDIT_EXPENSE: {
    const filteredExpense = state.expenses
      .filter((expense) => expense.id === action.payload.id);
    const editedExpense = Object.assign(...filteredExpense, action.payload);
    console.log(editedExpense);
    return {
      ...state,
      expenses: [
        ...state.expenses,
      ],
      editor: false,
    };
  }
  default: return state;
  }
};
export default wallet;
