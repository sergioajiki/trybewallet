// Coloque aqui suas actions
import { getCoin } from '../../service/Api';

export const SEND_LOGIN_STATE = 'SEND_LOGIN_STATE';
// export const SEND_WALLET_STATE = 'SEND_WALLET_STATE';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_STATE,
  payload: loginInfo,
});

export const coinsList = async () => {
  const coins = await getCoin();
  const result = Object.values(coins);
  // console.log(coins);
  console.log('array', result);
  const coinList = result
    .filter((element) => element.codein !== 'BRLT')
    .map((e) => e.code);
  console.log(coinList);
  // const coinListCode = await coins.map((coin) => coin.code);
};

export default { sendLoginInfo, coinsList };
