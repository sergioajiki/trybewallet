// Coloque aqui suas actions
import { getCoin } from '../../service/Api';

export const SEND_LOGIN_STATE = 'SEND_LOGIN_STATE';
export const SEND_COIN_LIST_CODE = 'SEND_COIN_LIST_CODE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const REQUEST_EDIT = 'REQUEST_EDIT';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_STATE,
  payload: loginInfo,
});

export const sendCoinListCode = (payload) => ({
  type: SEND_COIN_LIST_CODE,
  payload,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

export const delExpense = (id) => ({
  type: DEL_EXPENSE,
  payload: id,
});

export const requestEdit = (id) => ({
  type: REQUEST_EDIT,
  payload: id,
});

export const editExpense = (changes) => ({
  type: EDIT_EXPENSE,
  payload: changes,

});

export const listaDeMoedas = () => async (dispatch) => {
  const coins = await getCoin();
  const result = Object.values(coins);
  const coinList = result
    .filter((element) => element.codein !== 'BRLT')
    .map((e) => e.code);
  dispatch(sendCoinListCode(coinList));
};

export const exchangeRatesList = async () => {
  const coins = await getCoin();
  // console.log(coins);
  return coins;
};
