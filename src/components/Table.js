import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        Table
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense, index) => (
                <tr key={ index }>
                  <td>
                    {expense.description}
                    {' '}
                  </td>
                  <td>
                    {expense.tag}
                    {' '}
                  </td>
                  <td>
                    {expense.method}
                    {' '}
                  </td>
                  <td>
                    {Number(expense.value).toFixed(2)}
                    {' '}
                  </td>
                  <td>
                    {expense.currency}
                    {' '}
                  </td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                    {' '}
                  </td>
                  <td>
                    {(
                      expense.value * expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                    {' '}
                  </td>
                  <td>
                    {expense.exchangeRates[expense.currency].name}
                    {' '}
                  </td>

                  {/* <td>{expense.} </td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
  // expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
