import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div className="header">

        <h1 className="logo">
          Trybe
          <span className="chunk2">Wallet</span>
        </h1>

        <span className="expenses">
          <p>Total de despesas:</p>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </span>

        <h4
          data-testid="email-field"
          className="userEmail"
        >
          {email}
        </h4>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);
