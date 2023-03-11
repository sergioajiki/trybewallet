import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { exchangeRatesList, listaDeMoedas } from '../redux/actions';
import { tagList } from '../service/Api';
import '../css/WalletForm.css';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    // console.log(dispatch);
    listaDeMoedas(dispatch);
    exchangeRatesList();
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // coinsList();
    const { description, value, currency, method, tag } = this.state;
    const { currencies } = this.props;

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
            >
              <option>{ tag }</option>
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
            >
              <option>{ currency }</option>
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
            >
              <option>{ method }</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
        </span>

        <button className="button">Adicionar despesa</button>
      </form>

    );
  }
}
WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
