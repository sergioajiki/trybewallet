// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_LOGIN_STATE } from '../actions';

const INITIAL_STATE = {
  email: '',
  // password: '',
};

// const user = (state = INITIAL_STATE, action) => ({
//   state
// });
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_LOGIN_STATE: {
    return {
      ...state,
      email: action.payload,
    //   ...action.payload,
    };
  }
  default: return state;
  }
};

export default user;
