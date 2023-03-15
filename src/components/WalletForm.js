import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  exchangeRatesList,
  listaDeMoedas,
  saveExpense,
  editExpense,
} from '../redux/actions';
import { tagList } from '../service/Api';
import '../css/WalletForm.css';

class WalletForm extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(listaDeMoedas());
  }

  saveInfoExpenses = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const exchangeList = await exchangeRatesList();
    const expense = {
      ...this.state,
      exchangeRates: exchangeList,
    };
    dispatch(saveExpense(expense));
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
    }));
  };

  editInfoExpenses = (event) => {
    event.preventDefault();
    const { dispatch, idToEdit } = this.props;
    console.log(idToEdit);
    const expense = {
      ...this.state,
      id: idToEdit,
    };
    dispatch(editExpense(expense, idToEdit));
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { description, value, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;

    return (
      <form className="form">
        <span className="descAndTag">
          <label className="label" htmlFor="descriptionExpense">
            Descrição da Despesa
            <input
              data-testid="description-input"
              type="text"
              id="descriptionExpense"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              required
              className="input_description"
            />
          </label>

          <label className="label" htmlFor="tag">
            Categoria da Despesa
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              onChange={ this.handleChange }
              className="select_tag"
              value={ tag }
            >
              {
                tagList.map((cat, index) => (
                  <option
                    key={ index }
                    value={ [cat] }
                  >
                    {[cat]}
                  </option>
                ))
              }
            </select>
          </label>
        </span>

        <span className="ValorEMethod">
          <label className="label" htmlFor="valueExpense">
            Valor
            <input
              data-testid="value-input"
              type="number"
              id="valueExpense"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              required
              className="valor"
            />
          </label>

          <label className="label" htmlFor="tag">
            Moeda
            <select
              data-testid="currency-input"
              name="currency"
              id="tag"
              onChange={ this.handleChange }
              className="currency"
              value={ currency }
            >
              {
                currencies.map((codeCoin, index) => (
                  <option
                    key={ index }
                    value={ [codeCoin] }
                  >
                    {[codeCoin]}
                  </option>
                ))
              }
            </select>
          </label>

          <label className="label" htmlFor="method">
            Método de Pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              onChange={ this.handleChange }
              className="method"
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
        </span>
        {
          editor ? (
            <button
              className="button"
              onClick={ this.editInfoExpenses }
            >
              Editar despesa
            </button>
          )
            : (
              <button
                className="button"
                onClick={ this.saveInfoExpenses }
              >
                Adicionar despesa
              </button>
            )
        }
      </form>

    );
  }
}
WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
  // editor: state.wallet.editor,
  // currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
