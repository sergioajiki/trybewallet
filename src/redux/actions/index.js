// Coloque aqui suas actions
import { getCoin } from '../../service/Api';

export const SEND_LOGIN_STATE = 'SEND_LOGIN_STATE';
export const SEND_COIN_LIST_CODE = 'SEND_COIN_LIST_CODE';
// export const SEND_WALLET_STATE = 'SEND_WALLET_STATE';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_STATE,
  payload: loginInfo,
});

export const sendCoinListCode = (payload) => ({
  type: SEND_COIN_LIST_CODE,
  payload,
});

export const listaDeMoedas = async (dispatch) => {
  const coins = await getCoin();
  const result = Object.values(coins);
  // console.log(coins);
  // console.log('array', result);
  const coinList = result
    .filter((element) => element.codein !== 'BRLT')
    .map((e) => e.code);
  console.log(coinList);
  console.log(dispatch);
  dispatch(sendCoinListCode(coinList));
};
