// Coloque aqui suas actions
export const SEND_LOGIN_STATE = 'SEND_LOGIN_STATE';
// export const SEND_WALLET_STATE = 'SEND_WALLET_STATE';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_STATE,
  payload: loginInfo,
});

// export const sendWalletInfo = (walletInfo) => ({
//   type: SEND_LOGIN_STATE,
//   payload: walletInfo,
// });

export default { sendLoginInfo };
