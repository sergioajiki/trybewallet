import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { listaDeMoedas } from '../redux/actions';

class WalletForm extends Component {
  state = {
    tagList: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    console.log(dispatch);
    listaDeMoedas(dispatch);
  }

  render() {
    // coinsList();
    const { tagList } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        WalletForm
        <form>
          <label htmlFor="descriptionExpense">
            Descrição da Despesa
            <input
              data-testid="description-input"
              type="text"
              id="descriptionExpense"
              name="descriptionExpense"
              // value={}
              // onChange={}
              required
            />
          </label>
          <br />

          <label htmlFor="valueExpense">
            Valor
            <input
              data-testid="value-input"
              type="number"
              id="valueExpense"
              name="valueExpense"
              // value={}
              // onChange={}
              required
            />
          </label>
          <br />

          <label htmlFor="tag">
            Categoria da Despesa
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              // onChange={ onChange }
            >
              {
                tagList.map((tag, index) => (
                  <option
                    key={ index }
                    value={ [tag] }
                  >
                    {[tag]}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="tag">
            Moeda
            <select
              data-testid="currency-input"
              name="tag"
              id="tag"
              // onChange={ onChange }
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
          <br />
          <label htmlFor="">
            Metodo de Pagamento
            <select
              data-testid="method-input"
              id="tag"
              name="tag"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

        </form>

      </div>
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
