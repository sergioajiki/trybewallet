import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    // this.totalExpenses();
    const totalExpenses = () => {
      const { expenses } = this.props;
      const total = expenses
        .reduce((acc, curr) => (
          acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
          // console.log('esse e o curr', curr, 'acc', acc)
        ), 0);
      console.log(total);
      return total;
    };

    const { email } = this.props;
    // const { total } = this.state;
    return (
      <div className="header">

        <h1 className="logo">
          Trybe
          <span className="chunk2">Wallet</span>
        </h1>

        <span className="expenses">
          <p>
            Total de despesas:
            {' '}
          </p>
          <span data-testid="total-field">{ totalExpenses().toFixed(2) }</span>
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
  expenses: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);
