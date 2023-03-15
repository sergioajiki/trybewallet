import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense, requestEdit } from '../redux/actions';
import '../css/Table.css';

class Table extends Component {
  // state = {
  //   id: 0,
  //   value: 0,
  //   description: '',
  //   currency: 'USD',
  //   method: 'Dinheiro',
  //   tag: 'Alimentação',
  // };

  deleteExpense = (id) => {
    const { dispatch } = this.props;
    // console.log(id);
    // console.log('clicou no delete');
    dispatch(delExpense(id));
  };

  editExpense = (id) => {
    const { dispatch, editor, idToEdit } = this.props;
    // console.log(id);
    // console.log('clicou no edit', editor);
    dispatch(requestEdit(id));
    console.log('id', id, 'idToEdit', idToEdit, 'editor', editor);
    // console.log(this.state);

    // const filteredExpense = expenses
    //   .filter((expense) => expense.id === id);
    // console.log(filteredExpense[0].value);
    // this.setState({
    //   value: filteredExpense[0].value,
    //   description: filteredExpense[0].description,
    //   currency: filteredExpense[0].currency,
    //   method: filteredExpense[0].method,
    //   tag: filteredExpense[0].tag,
    // }, () => console.log('state logo apos', this.state));
    // console.log(filteredExpense);
    // console.log('state', this.state);
  };

  render() {
    const { expenses } = this.props;
    // console.log(expenses);
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
              expenses.map((expense) => (
                <tr key={ expense.id }>
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

                  <td>
                    <button
                      data-testid="delete-btn"
                      onClick={ () => this.deleteExpense(expense.id) }
                    >
                      Excluir
                    </button>
                    <button
                      data-testid="edit-btn"
                      onClick={ () => this.editExpense(expense.id) }
                    >
                      Editar
                    </button>
                  </td>
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
