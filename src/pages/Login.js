import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isLogButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  // validateButtonLogin = () => {
  //   const { name } = this.state;
  //   const validButton = name.length < minLength;
  //   this.setState({ isLogButtonDisabled: validButton });
  // };

  render() {
    const { email, password, isLogButtonDisabled } = this.state;
    const { history } = this.props;
    return (
      <div>
        <p>Login, To no comp Login</p>
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
              maxLength="6"
              onChange={ this.handleChange }
              required
            />
          </label>

          <button
            type="button"
            disabled={ isLogButtonDisabled }
            onClick={ () => history.push('/carteira') }
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
}.isRequired;
export default Login;
