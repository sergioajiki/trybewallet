import React, { Component } from 'react';
import { coinsList } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    coinsList();
  }

  render() {
    // coinsList();

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
          {/* <label htmlFor="">
            <input
              data-testid="currency-input"
              type=""
              id=""
              name=""
              value={}
              onChange={}
              required
            />
          </label> */}
          <label htmlFor="tag">
            Categoria da Despesa
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
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

export default WalletForm;
