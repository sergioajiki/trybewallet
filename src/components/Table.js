import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Table.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div className="tableComponent">
        <table>
          <thead>
            <tr className="all">
              <th className="tableHead1">Descrição</th>
              <th className="tableHead">Tag</th>
              <th className="tableHead">Método de pagamento</th>
              <th className="tableHead">Valor</th>
              <th className="tableHead">Moeda</th>
              <th className="tableHead">Câmbio utilizado</th>
              <th className="tableHead">Valor convertido</th>
              <th className="tableHead">Moeda de conversão</th>
              <th className="tableHead">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {
              expenses.map((expense, index) => (
                <tr key={ index }>
                  <td className="tableBody">
                    {expense.description}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {expense.tag}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {expense.method}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {Number(expense.value).toFixed(2)}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {expense.currency}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {Number(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                    {' '}
                  </td>
                  <td className="tableBody">
                    {(
                      expense.value * expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                    {' '}
                  </td>
                  <td className="tableBody">
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
