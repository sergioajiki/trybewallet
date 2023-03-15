import React from 'react';
import { getNodeText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

// test('', () => {});

describe('testa o componente Login', () => {
  test('verifica se existe um campo para colocar o email ', () => {
    renderWithRouterAndRedux(<App />);

    const fieldEmail = screen.getByPlaceholderText(/E-mail/i);
    expect(fieldEmail).toBeInTheDocument();
  });
  test('verifica se existe um campo para colocar o passaword ', () => {
    renderWithRouterAndRedux(<App />);

    const fieldPassword = screen.getByPlaceholderText(/Senha/i);
    expect(fieldPassword).toBeInTheDocument();
  });
  test('verifica se ao clicar o botão entrar e direcionado para página carteira ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    // const { pathname } = history.location;

    const fieldEmail = screen.getByPlaceholderText(/E-mail/i);
    const fieldPassword = screen.getByPlaceholderText(/Senha/i);

    const buttonLogin = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonLogin).toBeVisible();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(fieldEmail, 'teste@teste.com');
    userEvent.type(fieldPassword, '123456');
    expect(buttonLogin).toBeEnabled();

    userEvent.click(buttonLogin);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
describe('testa o componete walletForm', () => {
  test('testa se os campos do formulario são renderizados', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const fieldDescription = screen.getByTestId('description-input');
    const fieldTag = screen.getByTestId('tag-input');
    const fieldValue = screen.getByTestId('value-input');
    const fieldMethod = screen.getByTestId('method-input');
    expect(fieldDescription).toBeInTheDocument();
    expect(fieldTag).toBeInTheDocument();
    expect(fieldValue).toBeInTheDocument();
    expect(fieldMethod).toBeInTheDocument();
  });

  test('testa se os codigos das moedas são carregados corretamente', async () => {
    renderWithRouterAndRedux(<WalletForm />);
    const fieldCurrency = await screen.findByTestId('currency-input');
    expect(fieldCurrency).toBeInTheDocument();
  });

  test('testa se é renderizado um botão para adicionar as informações', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const buttonAdicionar = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(buttonAdicionar).toBeVisible();
  });
});

describe('testa o componente Table', () => {
  test('testa se a tabela contem os todos os headers', () => {
    renderWithRouterAndRedux(<Table />);
    const tableHeader = screen.getAllByRole('columnheader').map(getNodeText);
    // console.log(tableHeader);
    expect(tableHeader).toHaveLength(9);
    tableHeader.forEach((title) => {
      const titleTableHeader = screen.getByRole(
        'columnheader',
        { name: `${title}` },
      );
      expect(titleTableHeader).toBeInTheDocument();
    });
  });
});
describe('teste de operação', () => {
  test('testa o cadastro das despesas', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fieldEmail = screen.getByPlaceholderText(/E-mail/i);
    const fieldPassword = screen.getByPlaceholderText(/Senha/i);
    const buttonLogin = screen.getByRole('button', { name: /Entrar/i });

    userEvent.type(fieldEmail, 'teste@teste.com');
    userEvent.type(fieldPassword, '123456');
    userEvent.click(buttonLogin);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const fieldDescription = screen.getByTestId('description-input');
    const fieldTag = screen.getByTestId('tag-input');
    const fieldValue = screen.getByTestId('value-input');
    const fieldMethod = screen.getByTestId('method-input');
    const fieldCurrency = await screen.findByTestId('currency-input');
    const buttonAdicionar = screen.getByRole('button', { name: /Adicionar despesa/i });

    // console.log('valor do input', fieldDescription.ariaPlaceholder);
    userEvent.type(fieldDescription, 'supermercado');
    userEvent.type(fieldTag, 'Alimentação');
    userEvent.type(fieldValue, '100');
    userEvent.type(fieldMethod, 'Dinheiro');
    userEvent.type(fieldCurrency, 'JPY');
    userEvent.click(buttonAdicionar);

    // const fieldDescriptionAfter = await screen.findByTestId('description-input');
    // expect(fieldDescriptionAfter).toHaveValue(' ')
    const buttonEditar = await screen.findByRole('button', { name: /Editar/i });
    const buttonExcluir = await screen.findByRole('button', { name: /Excluir/i });
    expect(buttonEditar).toBeVisible();
    expect(buttonExcluir).toBeVisible();
  });
});
// test('testa se os campos do formulario são renderizados', () => {
//     renderWithRouterAndRedux(<WalletForm />);
//   });
