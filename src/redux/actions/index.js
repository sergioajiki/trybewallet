// Coloque aqui suas actions
import { getCoin } from '../../service/Api';

export const SEND_LOGIN_STATE = 'SEND_LOGIN_STATE';
// export const SEND_WALLET_STATE = 'SEND_WALLET_STATE';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_STATE,
  payload: loginInfo,
});

export const coinsList = async () => {
  const coinsCode = await getCoin();
  console.log(coinsCode);
};

export default { sendLoginInfo, coinsList };
