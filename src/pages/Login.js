import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLoginInfo } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    const emailCheck = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    const isValidEmail = emailCheck.test(email);
    console.log({ email }, isValidEmail);
    return isValidEmail;
  };

  validatePassword = () => {
    const { password } = this.state;
    const minLengthPassword = 6;
    const passwordCheck = password.length >= minLengthPassword;
    console.log({ password }, passwordCheck);
    return passwordCheck;
  };

  isLogButtonDisabled = () => {
    // const isLogButtonDisabled = (this.validateEmail() || this.validatePassword());
    const isLogButtonDisabled = (this.validateEmail() && this.validatePassword());
    console.log(isLogButtonDisabled);
    return !isLogButtonDisabled;
  };

  accessWallet = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    // console.log('accessWallet');
    // console.log(this.state);
    dispatch(sendLoginInfo(email));
    history.push('/carteira');
  };

  render() {
    this.validateEmail();
    this.validatePassword();
    this.isLogButtonDisabled();
    const { email, password } = this.state;
    // const { history, dispatch } = this.props;
    return (
      <div>
        <p>Login, To na page do Login</p>
        <h1>Trybe Wallet</h1>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              id="email"
              type="email"
              name="email"
              value={ email }
              placeholder="E-mail"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              id="password"
              type="text"
              name="password"
              value={ password }
              placeholder="Senha"
              onChange={ this.handleChange }
              required
            />
          </label>

          <button
            type="submit"
            disabled={ this.isLogButtonDisabled() }
            onClick={ this.accessWallet }
          >
            Entrar
          </button>

        </form>

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;
export default connect(null)(Login);
